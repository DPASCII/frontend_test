import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { SortField, SortDirection } from "./types/user";

type Option = {
  label: string;
  value: string;
};

type ControlsProps = {
  onSort: (sort: { field: SortField; direction: SortDirection }) => void;
};

const Controls = ({ onSort }: ControlsProps) => {
  const [sortField, setSortField] = useState<SingleValue<Option>>(null);
  const [sortDirection, setSortDirection] = useState<SingleValue<Option>>(null);

  const fieldOptions: Option[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: Option[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const handleFieldChange = (selected: SingleValue<Option>) => {
    setSortField(selected);

    if (selected && sortDirection) {
      onSort({
        field: selected.value as SortField,
        direction: sortDirection.value as SortDirection,
      });
    }
  };

  const handleDirectionChange = (selected: SingleValue<Option>) => {
    setSortDirection(selected);

    if (sortField && selected) {
      onSort({
        field: sortField.value as SortField,
        direction: selected.value as SortDirection,
      });
    }
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleDirectionChange}
        />
      </div>
    </div>
  );
};

export default Controls;

import React, { useState, useEffect, useRef } from "react";

type Child = {
  id: string;
  label: string;
};

type Parent = {
  id: string;
  label: string;
  children: Child[];
};

type Props = {
  data: Parent[];
};

const NestedCheckbox: React.FC<Props> = ({ data }) => {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const parentRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    data.forEach((group) => {
      const parent = group.id;
      const children = group.children.map((c) => c.id);

      const allChecked = children.every((id) => checkedState[id]);
      const someChecked = children.some((id) => checkedState[id]);

      if (parentRefs.current[parent]) {
        parentRefs.current[parent]!.indeterminate = !allChecked && someChecked;
      }
    });
  }, [checkedState, data]);

  const handleParentChange = (parentId: string, children: Child[]) => {
    const parentChecked = !children.every((c) => checkedState[c.id]);
    const updatedState: Record<string, boolean> = {};

    children.forEach((child) => {
      updatedState[child.id] = parentChecked;
    });

    setCheckedState((prev) => ({ ...prev, ...updatedState }));
  };

  const handleChildChange = (childId: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  return (
    <div className="p-4 space-y-4">
      {data.map((group) => {
        const allChecked = group.children.every((c) => checkedState[c.id]);

        return (
          <div key={group.id} className="border p-3 rounded-lg">
            <label className="font-semibold flex items-center gap-2">
              <input
                type="checkbox"
                ref={(el) => {parentRefs.current[group.id] = el}}
                checked={allChecked}
                onChange={() => handleParentChange(group.id, group.children)}
                aria-checked={allChecked ? "true" : "mixed"}
              />
              {group.label}
            </label>

            <div className="pl-6 mt-2 space-y-1">
              {group.children.map((child) => (
                <label key={child.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!checkedState[child.id]}
                    onChange={() => handleChildChange(child.id)}
                  />
                  {child.label}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NestedCheckbox;

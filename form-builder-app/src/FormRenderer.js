import React, { useState } from "react";

const FormRenderer = ({ schema }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const renderField = (key, property) => {
    const label = property.title || key;
    const value = formData[key] || "";

    switch (property.type) {
      case "string":
        if (property.enum) {
          return (
            <div key={key}>
              <label>{label}</label>
              <select value={value} onChange={(e) => handleChange(key, e.target.value)}>
                <option value="">-- Select --</option>
                {property.enum.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }
        return (
          <div key={key}>
            <label>{label}</label>
            <input
              type={property.format === "email" ? "email" : "text"}
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        );
      case "number":
        return (
          <div key={key}>
            <label>{label}</label>
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(key, Number(e.target.value))}
            />
          </div>
        );
      case "boolean":
        return (
          <div key={key}>
            <label>
              <input
                type="checkbox"
                checked={value || false}
                onChange={(e) => handleChange(key, e.target.checked)}
              />
              {label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    console.log('formData', formData)
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{schema.title}</h2>
      {Object.entries(schema.properties).map(([key, prop]) =>
        renderField(key, prop)
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRenderer;

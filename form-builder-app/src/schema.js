const schema = {
    title: "User Form",
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "Full Name",
      },
      age: {
        type: "number",
        title: "Age",
      },
      email: {
        type: "string",
        format: "email",
        title: "Email",
      },
      gender: {
        type: "string",
        title: "Gender",
        enum: ["Male", "Female", "Other"],
      },
      subscribe: {
        type: "boolean",
        title: "Subscribe to newsletter",
      },
    },
    required: ["name", "email"],
  };
  
  export default schema;
  
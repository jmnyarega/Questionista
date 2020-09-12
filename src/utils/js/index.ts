class Utils {
  format = (data: []) => {
    const result = data.map((data: { name: string; id?: string }) => ({
      value: data.name,
      label: data.name,
      id: data.id,
    }));
    return [{ options: result, label: "Topics" }];
  };
}

export default new Utils();

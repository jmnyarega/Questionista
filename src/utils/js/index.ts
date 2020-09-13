class Utils {
  format = (data: any, label: string) => {
    const result = data.map((data: { name: string; id?: string }) => ({
      value: data.name,
      label: data.name,
      id: data.id,
    }));
    return [{ options: result, label }];
  };
}

export default new Utils();

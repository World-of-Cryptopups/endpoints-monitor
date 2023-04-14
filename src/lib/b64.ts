const base64Encode = (str: string) => {
  const buf = Buffer.from(str);
  return buf.toString("base64");
};

const base64Decode = (str: string) => {
  const buf = Buffer.from(str, "base64");
  return buf.toString();
};



export { base64Decode, base64Encode };

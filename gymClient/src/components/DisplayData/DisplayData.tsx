import { useData } from "@/customHooks/useData";

export const DisplayData = () => {
  const { data } = useData();
  return data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;
};

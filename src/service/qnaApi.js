import { setQnaDetailData } from "../redux/qnaDetail";

export const sendCreateQnaData = async (qnaData) => {
  const reponse = await fetch("http://localhost:10000/qnas/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(qnaData),
  });
  const json = await reponse.json();
  return json;
};

export const readQnaDetail = async (qnaId) => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/detail/${qnaId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  return json;
};

export const readQnaList = async (startPage, pageSize, tag) => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/list?startPage=${startPage}&pageSize=${pageSize}&tag=${tag}`
  );
  const json = await response.json();
  return json;
};

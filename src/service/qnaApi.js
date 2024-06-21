

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

export const categoryListApi = async () => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/category/list`,
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

export const topTenListApi = async () => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/top-ten/list`,
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

export const bestAnswerListApi = async () => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/best-answer/list`,
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

export const qnaListApi = async () => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/list`,
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

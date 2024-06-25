export const answerListApi = async (qnaId) => {
  const response = await fetch(
    `http://localhost:10000/answers/api/list?id=${qnaId}`,
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

export const createAnswerApi = async (data) => {
  const response = await fetch("http://localhost:10000/answers/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const updateAnswerApi = async (data) => {
  const response = await fetch("http://localhost:10000/answers/api/update", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const deleteAnswerApi = async (data) => {
  const response = await fetch("http://localhost:10000/answers/api/delete", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const answerLikeApi = async (data) => {
  const response = await fetch(
    "http://localhost:10000/answers/api/answer-like",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const json = await response.json();
  return json;
};

export const answerDeleteApi = async (data) => {
  await fetch(`http://localhost:10000/answers/api/hard-delete`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const answerReportApi = async (answerContent) => {
  await fetch(
    `http://localhost:10001/ai/api/answerReport/?answer-content=${answerContent}`
  );
};

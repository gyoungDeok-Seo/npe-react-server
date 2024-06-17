export const createAnswer = async (data) => {
  await fetch("http://localhost:10000/answers/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const updateAnswer = async (answerId, content) => {
  const data = { id: answerId, answerContent: content };
  await fetch("http://localhost:10000/answers/api/update", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteAnswer = async (answerId) => {
  const data = { id: answerId };
  await fetch("http://localhost:10000/answers/api/delete", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const sendAnswerLikePeople = async (answerId) => {
  const data = { id: answerId };
  const response = await fetch("http://localhost:10000/answers/api/likeList", {
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

export const snedAnswerLike = async (answerId) => {
  const data = { id: answerId };
  const response = await fetch(
    "http://localhost:10000/answers/api/answerLike",
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

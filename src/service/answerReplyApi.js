export const replyListApi = async (qnaId) => {
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
  const json = response.json();
  return json;
};

export const createReplyApi = async (data) => {
  const response = await fetch("http://localhost:10000/replies/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = response.json();
  return json;
};

export const updateReplyApi = async (data) => {
  const response = await fetch("http://localhost:10000/replies/api/update", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = response.json();
  return json;
};

export const deleteReplyApi = async (data) => {
  const response = await fetch("http://localhost:10000/replies/api/delete", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = response.json();
  return json;
};

export const sendReplyLikePeople = async (answerId) => {
  const data = { id: answerId };
  const response = await fetch("http://localhost:10000/replies/api/likeList", {
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

export const replyLikeApi = async (data) => {
  const response = await fetch(
    "http://localhost:10000/replies/api/reply-like",
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

export const checkTheComment = async (replyContent) => {
  const response = await fetch(
    `http://localhost:10001/ai/api/replyFilters/?reply-content=${replyContent}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const insertProfanityApi = async (comment, target) => {
  const data = {
    comment: comment,
    target: target,
  };
  await fetch(`http://localhost:10000/replies/api/create-profanity`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const replyDeleteApi = async (data) => {
  await fetch(`http://localhost:10000/replies/api/hard-delete`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const replyReportApi = async (replyContent) => {
  await fetch(
    `http://localhost:10001/ai/api/replyReport/?reply-content=${replyContent}`
  );
};

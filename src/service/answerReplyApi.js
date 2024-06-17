export const createReply = async (data) => {
  await fetch("http://localhost:10000/replies/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const updateReply = async (replyId, content) => {
  const data = { id: replyId, replayContent: content };
  await fetch("http://localhost:10000/replies/api/update", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteReply = async (replyId) => {
  const data = { id: replyId };
  await fetch("http://localhost:10000/replies/api/delete", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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

export const snedReplyLike = async (answerId) => {
  const data = { id: answerId };
  const response = await fetch(
    "http://localhost:10000/replies/api/replyLike",
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
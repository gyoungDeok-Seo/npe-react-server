export const a = (() => {
  const b = async (qnaData) => {
    const formData = new FormData();
    qnaData.files.forEach((file, i) => {
      formData.append(`uploadFile`, file.file);
    });

    const response = await fetch("http://localhost:10000/file/upload", {
      method: "POST",
      credentials: "include".to,
      body: formData,
    });

    if (response.ok) {
      const uuids = await response.json();
      return uuids;
    }
  };
  return { b: b };
})();

export const createQnaApi = async (qnaData) => {
  const response = await fetch("http://localhost:10000/qnas/api/create", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(qnaData),
  });
  const json = await response.json();
  return json;
};

export const qnaDetailApi = async (qnaId) => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/detail?id=${qnaId}`,
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

export const deleteQnaApi = async (qnaId) => {
  await fetch(`http://localhost:10000/qnas/api/delete?id=${qnaId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
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
  const response = await fetch(`http://localhost:10000/qnas/api/top-ten/list`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
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

export const qnaListApi = async (categoryValue, tagsParams, pages) => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/list?category=${categoryValue}&page=${pages}&tags=${tagsParams}`,
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

export const tagQnaListApi = async (tag, pages) => {
  const response = await fetch(
    `http://localhost:10000/qnas/api/list-tag?page=${pages}&tag=${tag}`,
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


export const getMemberSkillsListFetch = async () => {
  const response = await fetch(`http://localhost:10000/members/api/skill`, {
    method: "GET",
    credentials: "include", // 세션 쿠키를 포함하여 요청
  });
  let data = await response.json();

  data = await data.map((skill) => ({
    id: skill.skillId,
    skillName: skill.skillName,
  }));
  return data;
};
export const memberSkillListModifyFetch = async (modifyInfo) => {
  await fetch(`http://localhost:10000/members/api/skill`, {
    method: "POST",
    credentials: "include", // 세션 쿠키를 포함하여 요청,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(modifyInfo),
  });
};
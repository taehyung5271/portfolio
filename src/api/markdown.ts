export const fetchMarkdownText = async (url: string): Promise<string> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`md 파일을 불러오지 못했습니다. (${res.status})`);
  }
  return await res.text();
};
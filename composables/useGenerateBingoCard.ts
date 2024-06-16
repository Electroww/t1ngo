const useGenerateBingoCard = async () => {
  const { data, refresh } = await useFetch("/api/bingo", {
    immediate: false,
  });

  const generateBingoCard = async () => {
    await refresh();
  };

  return { data, generateBingoCard };
};

const initUseGenerateBingoCard = () => {
  provide("useGenerateBingoCard", useGenerateBingoCard());
};

export { initUseGenerateBingoCard };

export default () =>
  inject("useGenerateBingoCard") as ReturnType<typeof useGenerateBingoCard>;

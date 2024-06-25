import html2canvas from "html2canvas";

const useScreenshot = () => {
  const bingoRef = ref<HTMLElement>();
  const setBingoRef = (el: HTMLElement) => {
    bingoRef.value = el;
  };

  const screenshotAndDownload = async () => {
    if (!bingoRef.value) return;
    try {
      const canvas = await html2canvas(bingoRef.value, {
        scale: 1,
        windowWidth: 1920,
        windowHeight: 1080,
        backgroundColor: null,
      });
      const image = canvas.toDataURL("image/png");
      downloadImage(image, "my_t1ngo_screenshot.png");
    } catch (error) {
      console.error("Error when generating picture:", error);
    }
  };

  const downloadImage = (data: string, filename: string) => {
    const link = document.createElement("a");
    link.href = data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { setBingoRef, screenshotAndDownload };
};

const initUseScreenshot = () => {
  provide("useScreenshot", useScreenshot());
};

export { initUseScreenshot };

export default () =>
  inject("useScreenshot") as ReturnType<typeof useScreenshot>;

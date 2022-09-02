export enum ToastVariants {
  ERROR = "error",
  SUCCESS = "success",
}

interface ToastOptions {
  message: string;
  title: string;
  variant: ToastVariants;
  duration?: number; //Duration in miliseconds
}

export function toast(options: ToastOptions) {
  const wrapper = document.getElementById("custom__toast__wrapper");
  const container = document.createElement("div");
  const message = document.createElement("p");
  const title = document.createElement("span");
  message.innerText = options.message;
  title.innerText = options.title;
  container.append(title);
  container.append(message);
  container.classList.add("toast_custom");
  container.classList.add(options.variant);
  wrapper?.appendChild(container);
  const firstDuration = (options.duration || 3000) - 300;
  setTimeout(() => {
    container.classList.add("toast_out");
    setTimeout(() => {
      container.remove();
    }, 300);
  }, firstDuration);
}

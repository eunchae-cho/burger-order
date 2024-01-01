import toast from "react-hot-toast";

export const successToast = (message: string) => {
    return toast.success(message, {
        style: {
            border: '1px solid #713200',
            padding: '10px',
            color: '#713200',
        },
        iconTheme: {
            primary: '#713200',
            secondary: '#faebe1',
        },
    });
}
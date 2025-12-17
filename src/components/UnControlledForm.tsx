import { useRef } from "react";

const UnControlledForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const message = messageRef.current?.value;

        console.log('Submitted:', { name, message });

        //Очистка формы
        if (nameRef.current) nameRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
    };

    return (
        <div className="form-container">
            <h2>Uncontrolled Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameRef} placeholder="Enter your name" />
                <textarea name="message" ref={messageRef} placeholder="Enter your message" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default UnControlledForm;
import formStyles from '@styles/form.module.css';



export interface FormInputType {
    title: string,
    name: string,
    type: React.HTMLInputTypeAttribute
}

export interface FormType {
    action: (formData: FormData) => void,
    inputs: FormInputType[],
    submitTitle: string
}

export default function Form({ action, inputs, submitTitle }: FormType) {
    return (
        <form className={formStyles.form} action={action}>
            {inputs.map((input, i) => { 
                return (
                    <div key={i} className={formStyles.formItem}>
                        <h4>{input.title}</h4> <input type={input.type} name={input.name} autoComplete={input.name} />
                    </div>
                );
            })}

            <button className={formStyles.button} type="submit">{submitTitle}</button>
        </form>
    );
}
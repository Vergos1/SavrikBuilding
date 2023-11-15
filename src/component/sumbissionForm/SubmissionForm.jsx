import style from "./SubmissionForm.module.scss";
import React, {useEffect, useState} from "react";
import {sendMessage} from "../../api/telegram.js";
import {TextField} from "@mui/material";
import {useForm} from "@mantine/form";
import {CustomSelect} from "../UI/Select/CustomSelect.jsx";
import {productData} from "../../data/formData/productData.js";



const SubmissionForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const form = useForm({
    initialValues: {
      selectProduct: "",
      name: "",
      tel: "",
    },
    validate: {
      name: (value) => {
        if (!value) {
          return "Це поле є обов'язковим!";
        } else if (!/^[a-zA-Zа-яА-ЯёЁґҐїЇіІєЄ']*$/u.test(value)) {
          return "Ім'я не може містити цифри або інші символи";
        }
      },
      tel: (value) => {
        if (!value) {
          return "Це поле є обов'язковим!";
        } else if (!/^\d+$/.test(value)) {
          return "Номер телефону може містити лише цифри";
        } else if (value.length < 8 || value.length > 15) {
          return "Номер телефону не може містити меньше 8 символів";
        }
      },
    },
  });

  useEffect(() => {
    form.setFieldValue('selectProduct', selectedProduct);
  }, [selectedProduct, form]);
  const handleProductChange = (product) => {
    form.setFieldValue('selectProduct', product);
    setSelectedProduct(product);
  };
  const handleSubmit = async (values) => {
    if (formSubmitted) return;

    setFormSubmitted(true);
    const message = `Вибраний товар: ${values.selectProduct}, Ім'я: ${values.name}, Номер телефону: ${values.tel}`;

    try {
      await sendMessage(message);
      // ... обработка успешной отправки
    } catch (error) {
      // ... обработка ошибки
    } finally {
      setFormSubmitted(false);
    }
  };
  // console.log(!!form.errors.name);
  return (
   <div className={`${style.submissionFormWrapper} item-charcoal`}>
     <h5 className={style.title}>зв&apos;яжіться зі мною</h5>
     <p className={style.description}>Будь ласка, заповніть форму в цьому розділі, щоб зв&apos;язатися зі мною. Або
       телефонуйте з 9:00 до 20:00. ET, з понеділка по п’ятницю</p>
     <form className={style.submissionForm} onSubmit={form.onSubmit(handleSubmit)}>
       <p>Оберіть товар із списку</p>
       {productData.map((selectData, index) => (
        <CustomSelect
         id={selectData.id}
         key={index}
         size={"14px 60px 14px 14px"}
         options={selectData.options}
         label={selectData.label}
         defaultValue={selectData.defaultValue}
         setSelectedProduct={handleProductChange}
        />

       ))}
       <label>Заповніть інформацію про себе</label>
       <TextField InputProps={{disableUnderline: true}}
                  id="name-input"
                  type="text"
                  error={!!form.errors.name}
                  helperText={form.errors.name || ''}
                  variant="filled" label="Ваше ім’я"
                  className={style.input}
                  placeholder="Ім'я"
                  {...form.getInputProps("name")}
       />
       <TextField InputProps={{disableUnderline: true}}
                  id="phone-input"
                  type="tel"
                  error={!!form.errors.tel}
                  helperText={form.errors.tel || ''}
                  variant="filled"
                  label="Номер телефону"
                  className={style.input}
                  placeholder="+380 00 000 000"
                  {...form.getInputProps("tel")}
       />
       <div className={style.footerButton}>
         <button type="submit" className={style.button}>
           send
         </button>
       </div>
     </form>
   </div>
  );
};
export default SubmissionForm;


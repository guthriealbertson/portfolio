import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.form}>
      <div className={styles.nameemail}>
        <input placeholder="Name" className={styles.name} />
        <input placeholder="Email" className={styles.email} />
      </div>
      <input className={styles.subject} placeholder="Subject" />
      <textarea className={styles.message} placeholder="Message" />
    </div>
  );
}

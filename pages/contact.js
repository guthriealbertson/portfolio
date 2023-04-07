import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <h1>
        If you're looking to hire a junior web developer, send me a message!
      </h1>
      <div className={styles.form}>
        <div className={styles.nameemail}>
          <input placeholder="Name" className={styles.name} />
          <input placeholder="Email" className={styles.email} />
        </div>
        <input className={styles.subject} placeholder="Subject" />
        <textarea className={styles.message} placeholder="Message" />
      </div>
    </div>
  );
}

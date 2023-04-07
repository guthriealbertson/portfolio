import styles from "@/styles/Resume.module.css";

export default function About() {
  return (
    <div className={styles.resume}>
      <div>
        <h1 id="guthrie-albertson">Guthrie Albertson</h1>
        <h3 id="guthrie-albertson-gmail-com-717-484-5056-philadelphia-pa">
          Guthrie.Albertson@gmail.com | (717) 484-5056 | Philadelphia, PA
        </h3>
      </div>
      <div className={styles.indent}>
        <p>
          <strong>EDUCATION</strong>
        </p>
        <p>
          <strong>Temple University Anticipated May, 2023</strong>
        </p>
        <p>
          <em>BS, Computer Science Philadelphia, PA</em>
        </p>
        <div className={styles.indenttwo}>
          <p>Relevant Coursework:</p>
          <ul className={styles.indent}>
            <li>
              <p>Cloud Computing</p>
            </li>
            <li>
              <p>Microservice Architecture</p>
            </li>
            <li>
              <p>Operating Systems</p>
            </li>
            <li>
              <p>Web Application Development</p>
            </li>
            <li>
              <p>Database Management Systems</p>
            </li>
            <li>
              <p>Data Structures and Algorithms</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.indent}>
        <p>
          <strong>EXPERIENCE, SKILLS &amp; INTERESTS</strong>
        </p>
        <div className={styles.indent}>
          <p>
            <strong>Experience:</strong> Cloud hosting, System architecture, Web
            Development, Networking, UI/UX Design
          </p>

          <p>
            <strong>Skills:</strong> JavaScript, React, CSS, Google Cloud
            Platform, AWS EC2 &amp; S3, Django, SQL, AWS Lambda/GCP Cloud
            Functions, C/C++, Java, Python
          </p>

          <p>
            <strong>Interests:</strong> Graphic design, Music, Urban planning,
            Transportation, Travel, Sustainability, History
          </p>
        </div>
      </div>

      <div className={styles.indent}>
        <strong>WORK EXPERIENCE</strong>
        <div className={styles.indent}>
          <p>
            <strong>New Holland YMCA Mar. 2018 -- Sep. 2019</strong>
          </p>
          <div className={styles.indent}>
            <p>
              <em>Welcome desk associate New Holland, PA</em>
            </p>
            <p>
              Greeted guests and responded to guests&#39; inquiries and issues
              in a timely, helpful, and personal manner to resolve any guest
              concern.
            </p>
            <p>
              Used and managed a large suite of software related to membership,
              events, communication, and security.
            </p>
          </div>
          <strong>Garden Spot Communities Jul. 2016 -- Dec. 2017</strong>
          <div className={styles.indent}>
            <p>
              <em>Dietary Aide New Holland, PA</em>
            </p>
            <p>
              Primarily worked in the memory care facility serving meals to
              patients with Alzheimer&#39;s and dementia.
            </p>
            <p>
              Worked with large teams of nurses and kitchen staff to ensure
              residents were properly cared for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

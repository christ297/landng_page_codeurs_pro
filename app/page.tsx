"use client";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <motion.header
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.heroContent}>
          <motion.img
            src="c1.jpeg"
            alt="Codeurs Pro Logo"
            className={styles.logo}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Bienvenue chez <span className={styles.highlight}>Codeurs Pro</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Rejoignez la communauté pour apprendre, partager et évoluer dans le développement.
          </motion.p>
          <motion.a
            href="https://wa.me/+22897282900"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.joinButton}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Rejoindre la communauté | Contactez-Nous
          </motion.a>
        </div>
      </motion.header>
      <motion.section className={styles.info}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>{"Qu'est ce que Codeurs Pro ?"}</h2>
        <p>{"Nous sommes une communauté dynamique dédiée à l'apprentissage, au partage de connaissances et à l'évolution dans le monde du développement.Nous regroupons des passionnés de technologie qui souhaitent améliorer leurs compétences, que ce soit dans le développement web, la cybersécurité, l'intelligence artificielle,ou tout autre domaine du génie logiciel."}</p>
        <h2>Notre Mission</h2>
        <p>{"Encourager la collaboration, favoriser l'innovation et créer un environnement d’apprentissage enrichissant pour tous nos membres.Si vous êtes passionné par la technologie et souhaitez évoluer aux côtés de professionnels et d'experts du secteur, vous êtes au bon endroit !"}</p>
          <motion.a
            href="https://wa.me/+22897282900"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.joinButton}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Rejoindre la communauté
          </motion.a>
      </motion.section>
      {/* Groupes */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Nos Groupes</h2>
        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Cybersécurité</h3>
            <p>Apprenez à protéger les systèmes et les données contre les cyberattaques. Explorez les techniques de sécurisation des réseaux, la cryptographie et les meilleures pratiques en matière de sécurité.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Java</h3>
            <p>{"Maîtrisez l'un des langages de programmation les plus populaires. Découvrez les concepts de POO, les frameworks comme Spring, et développez des applications robustes et scalables."}</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>PHP</h3>
            <p>Plongez dans le développement web avec PHP. Apprenez à créer des sites dynamiques, à utiliser des frameworks comme Laravel, et à interagir avec des bases de données.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          > 
            <h3>Linux</h3>
            <p>Explorez le monde de Linux. Apprenez à administrer des systèmes, à écrire des scripts shell, et à utiliser des outils open-source pour optimiser votre workflow.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3>HTML / CSS / JS</h3>
            <p>Démarrez avec les bases du développement web. Créez des sites web interactifs et responsives en maîtrisant HTML, CSS, et JavaScript.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3>WordPress</h3>
            <p>Découvrez comment créer et gérer des sites web avec WordPress. Apprenez à personnaliser des thèmes, à développer des plugins, et à optimiser les performances.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3>Python</h3>
            <p>{"Apprenez Python, un langage polyvalent utilisé pour le web, l'analyse de données, l'automatisation, et bien plus encore. Découvrez des librairies comme Django, Flask, et Pandas."}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Ambassadeurs */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Nos Ambassadeurs</h2>
        <div className={styles.grid}>
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h3>{"Ce qu'ils gagnent"}</h3>
    <ul>
      <li>Développement de leur réseau professionnel</li>
      <li>Accès privilégié à des événements et ressources</li>
      <li>Visibilité accrue dans la communauté</li>
      <li>Opportunités de collaboration sur des projets innovants</li>
    </ul>
  </motion.div>

  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h3>{"Ce qu'ils doivent faire"}</h3>
    <ul>
      <li>Partager leur expertise via des ateliers et présentations</li>
      <li>Accompagner les membres sur leurs projets techniques</li>
      <li>Promouvoir la communauté et ses valeurs</li>
      <li>Inspirer et guider les membres en tant que référence technique</li>
    </ul>
  </motion.div>
</div>

      </motion.section>

      {/* Conférences */}
      <motion.section
        className={styles.info}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Nos Conférences</h2>
        <div className={styles.conference}>
          <motion.img
            src="t0.png"
            alt="Conférence UCAO"
            className={styles.conferenceImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="c1_1.jpg"
            alt="Conférence UCAO"
            className={styles.conferenceImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {"Nous avons organisé des conférences à l'UCAO sur des sujets d'actualité comme l'Intelligence Artificielle et la Cybersécurité. Ces événements ont rassemblé des experts et des passionnés pour partager leurs connaissances et expériences."}
          </motion.p>
        </div>
      </motion.section>

      {/* Ressources */}
      <motion.section
        className={styles.section}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ressources pour Apprendre</h2>
        <div className={styles.grid}>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Programmation en Python</h3>
            <p>Découvrez les bases de Python et ses applications dans divers domaines.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Développement Java moderne</h3>
            <p>Apprenez à développer des applications modernes avec Java.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Cybersécurité pour développeurs</h3>
            <p>Protégez vos applications des vulnérabilités courantes.</p>
          </motion.div>
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3>Frameworks PHP avancés</h3>
            <p>Maîtrisez les frameworks PHP pour développer des applications web robustes.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Codeurs Pro. Tous droits réservés.</p>
        <div className={styles.socialLinks}>
          <a href="https://wa.me/+22897282900" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} />
          </a>
          <a href="https://facebook.com/codeurspro" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com/codeurspro" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/company/codeurs-pro/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.footer>   
  </main>
  );
}
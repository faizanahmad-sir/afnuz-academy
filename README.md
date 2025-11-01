<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Afnuz Academy - Best online coaching for JMI & AMU entrance exams. Expert faculty, live classes, mock tests for Class 11 admission.">
    <meta name="keywords" content="JMI entrance, AMU entrance, Class 11 coaching, online coaching, entrance exam preparation">
    <meta property="og:title" content="Afnuz Academy - Gateway to Jamia & AMU">
    <meta property="og:description" content="Crack JMI & AMU entrance exams with expert mentorship">
    <meta property="og:image" content="your-logo.png">
    <meta property="og:url" content="https://afnuzacademy.com">
    <title>Afnuz Academy - Gateway to Jamia & AMU</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <style>
        /* Global Styles */
        :root {
            --primary-blue: #0056b3;
            --accent-gold: #FFD700;
            --white: #FFFFFF;
            --text-dark: #2c3e50;
            --background-light: #f0f4f8;
            --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            color: var(--text-dark);
            background-color: var(--background-light);
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }

        /* Full-page Watermark Pattern */
        body::before {
            content: "AFNUZ ACADEMY AFNUZ ACADEMY AFNUZ ACADEMY AFNUZ ACADEMY";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 50px,
                rgba(0, 86, 179, 0.03) 50px,
                rgba(0, 86, 179, 0.03) 100px
            );
            pointer-events: none;
            z-index: -1;
            font-size: 4rem;
            font-weight: bold;
            color: rgba(0, 86, 179, 0.05);
            white-space: nowrap;
            opacity: 0.5;
            transform: rotate(-30deg);
            background-size: 200% 200%;
            animation: watermarkMove 20s linear infinite;
        }

        @keyframes watermarkMove {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
        }

        /* Preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-blue);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid var(--accent-gold);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* WhatsApp Button */
        .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }

        .whatsapp-float img {
            width: 50px;
            height: 50px;
            transition: var(--transition);
        }

        .whatsapp-float img:hover {
            transform: scale(1.1);
        }

        /* Typography */
        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
        }

        /* Header */
        header {
            background-color: rgba(0, 86, 179, 0.95);
            backdrop-filter: blur(10px);
            color: var(--white);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow);
        }

        header .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        header h1 {
            margin: 0;
            font-size: 1.8rem;
        }

        header p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }

        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 1.5rem;
        }

        nav a {
            color: var(--white);
            text-decoration: none;
            font-weight: 600;
            transition: var(--transition);
            position: relative;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent-gold);
            transition: var(--transition);
        }

        nav a:hover::after {
            width: 100%;
        }

        nav a:hover {
            color: var(--accent-gold);
        }

        /* Hero Section */
        #hero {
            background: linear-gradient(135deg, var(--primary-blue), #003366);
            color: var(--white);
            text-align: center;
            padding: 8rem 2rem;
            position: relative;
            overflow: hidden;
        }

        #hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            pointer-events: none;
        }

        #hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease-out;
        }

        #hero h2 {
            font-size: 1.6rem;
            margin-bottom: 2rem;
            font-weight: 300;
            animation: fadeInUp 1.2s ease-out;
            color: white;
        }

        #hero .cta-container {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        #hero .cta {
            display: inline-block;
            background-color: var(--accent-gold);
            color: var(--text-dark);
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: var(--transition);
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        #hero .cta:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
            background-color: #FFC107;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Section General */
        section {
            padding: 5rem 2rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h2 {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.2rem;
            color: var(--primary-blue);
            position: relative;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background-color: var(--accent-gold);
            border-radius: 2px;
        }

        /* About Section */
        #about {
            background-color: var(--white);
            box-shadow: var(--shadow);
        }

        #about p {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1.1rem;
            text-align: center;
        }

        /* Teachers Section */
        #teachers {
            background-color: var(--background-light);
        }

        .teachers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .teacher {
            background-color: var(--white);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .teacher::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--primary-blue), var(--accent-gold));
            transition: var(--transition);
        }

        .teacher:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .teacher img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 1rem;
            object-fit: cover;
            border: 4px solid var(--accent-gold);
            transition: var(--transition);
        }

        .teacher:hover img {
            transform: scale(1.1);
        }

        .teacher h3 {
            margin: 0.5rem 0;
            color: var(--primary-blue);
        }

        .teacher p {
            margin: 0.5rem 0;
            font-size: 0.95rem;
        }

        .teacher .cta {
            display: inline-block;
            background-color: var(--primary-blue);
            color: var(--white);
            padding: 0.5rem 1rem;
            text-decoration: none;
            border-radius: 25px;
            font-size: 0.9rem;
            margin-top: 1rem;
            transition: var(--transition);
        }

        .teacher .cta:hover {
            background-color: var(--accent-gold);
            color: var(--text-dark);
            transform: translateY(-3px);
        }

        /* Courses Section */
        #courses {
            background-color: var(--white);
            text-align: center;
        }

        #courses ul {
            list-style: none;
            padding: 0;
            max-width: 800px;
            margin: 2rem auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        #courses li {
            background-color: var(--background-light);
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        #courses li::before {
            content: '\2714';
            position: absolute;
            top: 1rem;
            left: 1rem;
            font-size: 1.2rem;
            color: var(--accent-gold);
        }

        #courses li:hover {
            transform: scale(1.05);
            background-color: var(--primary-blue);
            color: var(--white);
        }

        #courses li:hover::before {
            color: var(--white);
        }

        /* Testimonials Section */
        #testimonials {
            background-color: var(--background-light);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial {
            background-color: var(--white);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: var(--shadow);
            font-style: italic;
            position: relative;
            transition: var(--transition);
        }

        .testimonial::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 20px;
            font-size: 4rem;
            color: var(--accent-gold);
            opacity: 0.3;
        }

        .testimonial:hover {
            transform: translateY(-5px);
        }

        /* FAQ Section */
        #faq {
            background-color: var(--white);
            text-align: center;
        }

        .faq-item {
            max-width: 800px;
            margin: 1rem auto;
            text-align: left;
            padding: 1rem;
            border-bottom: 1px solid var(--background-light);
            cursor: pointer;
        }

        .faq-item h4 {
            margin: 0 0 0.5rem;
            color: var(--primary-blue);
            position: relative;
        }

        .faq-item h4::after {
            content: '\25BC';
            position: absolute;
            right: 0;
            font-size: 0.8rem;
            transition: var(--transition);
        }

        .faq-item.active h4::after {
            transform: rotate(180deg);
        }

        .faq-item p {
            margin: 0;
            font-size: 1rem;
            display: none;
        }

        .faq-item.active p {
            display: block;
        }

        /* Contact Section */
        #contact {
            background: linear-gradient(135deg, var(--primary-blue), #003366);
            color: var(--white);
            text-align: center;
        }

        #contact form {
            max-width: 600px;
            margin: 0 auto 2rem;
            display: grid;
            gap: 1rem;
        }

        #contact input {
            padding: 1rem;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        #contact input:focus {
            outline: none;
            box-shadow: 0 0 0 3px var(--accent-gold);
        }

        #contact button {
            background-color: var(--accent-gold);
            color: var(--text-dark);
            padding: 1rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            box-shadow: var(--shadow);
        }

        #contact button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(255, 215, 0, 0.4);
            background-color: #FFC107;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
        }

        .social-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 1.5rem;
            transition: var(--transition);
        }

        .social-links a:hover {
            color: var(--accent-gold);
            transform: scale(1.2);
        }

        /* Footer */
        footer {
            background-color: var(--text-dark);
            color: var(--white);
            text-align: center;
            padding: 1.5rem 0;
            font-size: 0.9rem;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            #hero h1 {
                font-size: 2.2rem;
            }

            #hero h2 {
                font-size: 1.2rem;
            }

            header .container {
                flex-direction: column;
                text-align: center;
            }

            nav ul {
                margin-top: 1rem;
                flex-wrap: wrap;
                justify-content: center;
            }

            .teachers-grid {
                grid-template-columns: 1fr;
            }

            .cta-container {
                flex-direction: column;
                align-items: center;
            }
        }

        @media (max-width: 480px) {
            #hero h1 {
                font-size: 1.8rem;
                line-height: 1.2;
            }

            #hero h2 {
                font-size: 1rem;
            }

            .teacher img {
                width: 100px;
                height: 100px;
            }
        }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="spinner"></div>
    </div>

    <!-- WhatsApp Button -->
    <div class="whatsapp-float">
        <a href="https://wa.me/91YOURNUMBER" target="_blank">
            <img src="https://placehold.co/50x50?text=WhatsApp" alt="WhatsApp">
        </a>
    </div>

    <header>
        <div class="container">
            <div>
                <h1>Afnuz Academy</h1>
                <p>“Gateway to Jamia & AMU – Start Your Journey to Excellence”</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#teachers">Teachers</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="hero">
        <h1>Crack JMI & AMU Entrance with Expert Mentorship</h1>
        <h2>Online Preparation Classes for 10th Students Aspiring for Class 11 Admission</h2>
        <div class="cta-container">
            <a href="#contact" class="cta">Join Now</a>
        </div>
    </section>

    <section id="about" class="container">
        <h2>About Afnuz Academy</h2>
        <p>Afnuz Academy is dedicated to guiding 10th-grade students toward success in Jamia and AMU entrance exams. Our ranked faculty from reputed universities ensure smart learning, personal mentorship, and result-oriented strategies.</p>
    </section>

    <section id="teachers">
        <div class="container">
            <h2>Our Expert Teachers</h2>
            <div class="teachers-grid">
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Rehan" alt="Md Rehan Farhan">
                    <h3>Md Rehan Farhan</h3>
                    <p>B.Com (Hons) – Jamia Millia Islamia, Rank 20</p>
                    <p>“An expert mentor for Commerce and Aptitude with a deep understanding of competitive exams.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Aisha" alt="Aisha Khan">
                    <h3>Aisha Khan</h3>
                    <p>M.Sc. – Aligarh Muslim University, Rank 15</p>
                    <p>“Specialist in Science subjects, helping students master concepts for entrance success.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Ahmed" alt="Ahmed Siddiqui">
                    <h3>Ahmed Siddiqui</h3>
                    <p>B.A. (Hons) – Jamia Millia Islamia, Rank 10</p>
                    <p>“Experienced in Humanities and General Knowledge for comprehensive exam prep.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Fatima" alt="Fatima Ali">
                    <h3>Fatima Ali</h3>
                    <p>B.Sc. (Hons) – Aligarh Muslim University, Rank 25</p>
                    <p>“Dedicated Math tutor with proven strategies for problem-solving in entrance tests.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Rahul" alt="Rahul Verma">
                    <h3>Rahul Verma</h3>
                    <p>M.A. – Jamia Millia Islamia, Rank 12</p>
                    <p>“English language expert focusing on reading comprehension and writing skills.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
                <div class="teacher">
                    <img src="https://placehold.co/120x120?text=Sara" alt="Sara Ahmed">
                    <h3>Sara Ahmed</h3>
                    <p>B.Tech – Aligarh Muslim University, Rank 18</p>
                    <p>“Reasoning and logical aptitude coach with interactive teaching methods.”</p>
                    <a href="#contact" class="cta">Contact</a>
                </div>
            </div>
        </div>
    </section>

    <section id="courses" class="container">
        <h2>Our Courses</h2>
        <p>Prepare for JMI and AMU entrance exams with our comprehensive online courses tailored for 10th-grade students aiming for Class 11 admission.</p>
        <ul>
            <li>Live interactive classes with expert faculty.</li>
            <li>Comprehensive study notes and materials.</li>
            <li>Regular mock tests to simulate exam conditions.</li>
            <li>Personalized doubt-clearing sessions.</li>
            <li>Result-oriented strategies and tips.</li>
            <li>Access to recorded sessions for revision.</li>
        </ul>
    </section>

    <section id="testimonials">
        <div class="container">
            <h2>Student Testimonials</h2>
            <div class="testimonials-grid">
                <div class="testimonial">
                    <p>“Afnuz Academy helped me secure a top rank in JMI entrance. The mentorship was invaluable!” – Student A</p>
                </div>
                <div class="testimonial">
                    <p>“The mock tests and notes were spot on. Highly recommend for AMU aspirants.” – Student B</p>
                </div>
                <div class="testimonial">
                    <p>“Personal attention made all the difference in my preparation journey.” – Student C</p>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-item">
            <h4>What is the duration of the course?</h4>
            <p>Our comprehensive program spans 6-8 months, covering complete syllabus and revision.</p>
        </div>
        <div class="faq-item">
            <h4>Are study materials provided?</h4>
            <p>Absolutely, we provide comprehensive notes, practice papers, and access to recorded sessions.</p>
        </div>
        <div class="faq-item">
            <h4>How can I contact the faculty?</h4>
            <p>You can reach out via WhatsApp or email for personalized doubt-clearing sessions.</p>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <form id="inquiry-form">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <input type="tel" name="whatsapp" placeholder="Your WhatsApp Number" required>
                <button type="submit">Submit Inquiry</button>
            </form>
            <div class="social-links">
                <a href="https://instagram.com/afnuzacademy" target="_blank">Instagram</a>
                <a href="https://t.me/afnuzacademy" target="_blank">Telegram</a>
                <a href="https://youtube.com/afnuzacademy" target="_blank">YouTube</a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Afnuz Academy. All rights reserved.</p>
    </footer>

    <script>
        // Preloader
        window.addEventListener('load', () => {
            document.getElementById('preloader').style.display = 'none';
        });

        // Form submission
        const form = document.getElementById('inquiry-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.');
            form.reset();
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const hero = document.getElementById('hero');
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });

        // FAQ toggle
        document.querySelectorAll('.faq-item h4').forEach(faq => {
            faq.addEventListener('click', () => {
                const parent = faq.parentElement;
                const content = faq.nextElementSibling;
                parent.classList.toggle('active');
            });
        });
    </script>
</body>
</html>

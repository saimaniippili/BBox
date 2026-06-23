/*
 ==================================================
   BRAINBOX STAFFING - ADVANCED INNOVATION ENGINE
   Features: Interactive 3D Particle Brain, Parallax Tilt,
   Slide-out Drawer overlays, Interactive SVG charts, Split-Pane Job board
   Design Standard: 1000-Dollar Web Application
 ==================================================
*/

// --- 1. INTERNATIONALIZATION (TRANSLATIONS) DICTIONARY ---
const translations = {
    en: {
        meta_title: "Brainbox Staffing | Premium Enterprise Recruitment & Staffing",
        meta_description: "Premium enterprise recruitment, werving en selectie, executive search, and interim staffing solutions. Inspired by Brainbox Consulting, powered by advanced AI job matching.",
        skip_to_content: "Skip to content",
        announcement_text: "🚀 Elevate your talent strategy with our premium senior recruitments.",
        announcement_cta: "View Open Positions &rarr;",
        nav_services: "Services",
        nav_why_us: "Why Us",
        nav_industries: "Industries",
        nav_leadership: "Our Team",
        nav_jobs: "Jobs",
        nav_ai_matcher: "AI Matcher",
        nav_blog: "Insights",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "✨ Premium Corporate & Tech Recruitment",
        hero_title: "Making Hiring in Excellence an achievable standard",
        hero_subtitle: "Connecting businesses with top talent through staffing, recruitment, consulting, and workforce solutions.",
        hero_cta_hire: "Hire Talent",
        hero_cta_jobs: "Find Opportunities",
        hero_stats_banner: `<span class="banner-badge">Global Talent. Local Impact.</span><span class="banner-numbers"><strong>10K+</strong> Successful Placements</span>`,
        trusted_by_title: "TRUSTED BY LEADING ENTERPRISES GLOBALLY",
        
        filter_all: "All Roles",
        filter_devops: "Cloud/DevOps",
        filter_software: "Software Eng",
        filter_ai: "AI/Data",
        btn_match: "Match Talent",
        
        // Services
        services_subtitle: "EXPERT RECRUITMENT SERVICES",
        services_title: "Tailored Staffing & Executive Search",
        services_desc: "Aligning high-performance individuals with industry leaders through tailored methodologies.",
        service1_title: "Contract Staffing",
        service1_text: "Scale your team with skilled professionals on demand.",
        service2_title: "Permanent Hiring",
        service2_text: "Find the right talent for long-term success.",
        service3_title: "Contract-to-Hire",
        service3_text: "Evaluate talent before making a long-term commitment.",
        service4_title: "Executive Search",
        service4_text: "We find leaders who drive vision and transformation.",
        service5_title: "Workforce Solutions",
        service5_text: "End-to-end solutions for a future-ready workforce.",
        service6_title: "Training & Development",
        service6_text: "Uplift your workforce. Empower the future.",
        service_cta: "Inquire &rarr;",
        service_browse_jobs: "Browse Jobs &rarr;",
        
        // Why Us
        why_us_subtitle: "WHY BRAINBOX STAFFING",
        why_us_title: "Why Choose Brainbox",
        why_us_desc: "We do not just fill vacancies; we build functional team structures. Our wervings-driven staffing yields top talent retention.",
        why_bullet1_h: "Industry-Specific Experts",
        why_bullet1_t: "Recruiters hold active backgrounds in the technologies and domains they search for.",
        why_bullet2_h: "Global Reach & Local Presence",
        why_bullet2_t: "Headquartered in the Netherlands, recruiting across all of Europe, USA, and UK.",
        why_stat1_label: "Clients Across the Globe",
        why_stat2_label: "Successful Placements",
        why_stat3_label: "Client Satisfaction",
        why_stat4_label: "Of Excellence",
        
        // Industries (Rebranded to Technical Expertise)
        industries_subtitle: "OUR DOMAIN & TECHNICAL EXPERTISE",
        industries_title: "Our Domain & Technical Expertise",
        industries_desc: "Providing wervingsexpertise across highly complex technical sectors through specialized placement programs.",
        role_embedded: "Embedded Systems Developers",
        role_iot: "High Tech (IoT)",
        role_testing: "Software Testing",
        role_devops: "DevOps Engineers",
        role_app_cons: "Application Consultants",
        role_erp: "ERP Consultants",
        role_pm: "Project & Program Managers",
        role_automation: "Industrial Automation Engineers",

        // Panel Badges
        ind_it_badge: "IT & Software",
        ind_hc_badge: "Healthcare",
        ind_fin_badge: "Banking & Finance",
        ind_mfg_badge: "Manufacturing",
        ind_rtl_badge: "Retail",
        ind_tel_badge: "Telecom",

        // Panel Descriptions
        panel_tech_desc: "We scale high-performance SaaS teams, construct advanced artificial intelligence divisions, and recruit top cloud infrastructure architects. Our deep vetting ensures candidates possess actual hands-on engineering experience.",
        panel_hc_desc: "Providing executive healthcare directors, board members, and interim hospital managers to lead systems through regulatory transformations and operational efficiency goals.",
        panel_fin_desc: "Connecting commercial banks, fintech scale-ups, and global asset managers with quantitative analysts, compliance leaders, and CFOs who drive growth.",
        panel_mfg_desc: "Sourcing plant directors, global supply chain officers, and operational excellence leads who implement Lean Six Sigma standards across manufacturing plants.",
        panel_rtl_desc: "Connecting retail brands, e-commerce giants, and modern warehousing companies with digital directors, supply chain managers, and logistics operations heads.",
        panel_tel_desc: "Sourcing seasoned network planning engineers, 5G roll-out experts, and chief infrastructure architects to expand modern enterprise telecommunication systems.",

        // Labels
        lbl_fill_time: "Avg. Fill Time",
        lbl_active_pool: "Active Talent",
        lbl_retention: "Retention Rate",
        lbl_skill_stack: "Core Skill Stack",
        btn_hire_tech: "Hire Tech Leaders &rarr;",
        btn_hire_hc: "Hire Healthcare Leaders &rarr;",
        btn_hire_fin: "Hire Finance Leaders &rarr;",
        btn_hire_mfg: "Hire Operations Leaders &rarr;",
        btn_hire_rtl: "Hire E-commerce Leaders &rarr;",
        btn_hire_tel: "Hire Telecom Leaders &rarr;",
        
        // Hiring Process
        hiring_subtitle: "OUR SYSTEMATIC APPROACH",
        hiring_title: "Our Hiring Process",
        step1_title: "Talent Sourcing",
        step1_desc: "We identify and engage high-potential passive candidates through our global tech network and premium sourcing channels.",
        step2_title: "Screening & Shortlisting",
        step2_desc: "A rigorous filter stage checking core tech stack competencies, soft skill dynamics, culture fit, and career goals.",
        step3_title: "Interview & Assessment",
        step3_desc: "Candidates undergo structured technical evaluations, code challenges, and expert assessments conducted by veteran tech leads.",
        step4_title: "Selection & Offer",
        step4_desc: "Final selection round with stakeholders, followed by reference checks, salary benchmarking guidance, and formal contract offers.",
        step5_title: "Onboarding & Support",
        step5_desc: "Seamless onboarding transition supported by our HR teams, followed by scheduled check-ins to guarantee long-term retention.",
        
        // Success Stories
        success_subtitle: "PROVEN METRICS",
        success_title: "Success Stories",
        success_stat1_lbl: "Reduction in Time to Hire",
        success_stat2_lbl: "Client Retention",
        success_stat3_lbl: "Successful Placements",
        success_stat4_lbl: "Happy Clients",
        
        // Testimonials
        testimonials_subtitle: "WHAT CLIENTS SAY",
        testimonials_title: "What Our Clients Say",
        t1_quote: `"Brainbox Consulting has been instrumental in helping us find top talent quickly. Their team understands our needs perfectly."`,
        t2_quote: `"Their professionalism and commitment to quality are unparalleled. Highly recommended!"`,
        t3_quote: `"A reliable partner for all our staffing needs. Exceptional service every time."`,
        
        // Leadership
        team_subtitle: "OUR TEAM MEMBERS",
        team_title: "Brainbox Consulting Team Members",
        team_desc: "Experienced professionals coordinating recruitment strategies for premier enterprise accounts.",
        team_ceo_pos: "Founder & Managing Director",
        team_ceo_bio: "Over 20 years in executive headhunting and organizational consulting. Inspired to connect strategic thinkers with enterprise builders.",
        team_ceo_tag1: "Strategy",
        team_ceo_tag2: "Headhunting",
        team_ceo_quote: `"Sourcing leaders is about connecting vision with action."`,
        team_coo_pos: "Partner, Tech & Interim Services",
        team_coo_bio: "Leads tech placement divisions. Expert in interim management systems and scaling agile tech startups to enterprise size.",
        team_coo_tag1: "Interim Ops",
        team_coo_tag2: "Tech Scaling",
        team_coo_quote: `"Interim management demands immediate clarity in complexity."`,
        team_cto_pos: "Chief Technology Officer (CTO)",
        team_cto_bio: "Over 15 years developing deep-tech software architecture. Sarah coordinates our tech placement vetting and AI wervingspipelines.",
        team_cto_tag1: "Vetting Systems",
        team_cto_tag2: "AI Pipelines",
        team_cto_quote: `"Our tech vetting ensures skills are verified by active engineers."`,
        team_director_pos: "Director of Enterprise Relations",
        team_director_bio: "Handles global corporate accounts and coordinates high-volume RPO service programs across key EU and US regions.",
        team_director_tag1: "Enterprise Accounts",
        team_director_tag2: "RPO Programs",
        team_director_quote: `"Long-term corporate partnerships are built on metric-proven trust."`,
        team_hr_pos: "Head of People",
        team_hr_bio: "Manages our internal culture, compliance auditing, and strategic onboarding support for key corporate placements.",
        team_hr_tag1: "People Culture",
        team_hr_tag2: "Compliance",
        team_hr_quote: `"Successful onboarding is where candidate potential meets organizational culture."`,
        
        // Jobs Portal
        jobs_subtitle: "ACTIVE RECRUITMENTS",
        jobs_title: "Explore Career Opportunities",
        jobs_desc: "Search and apply to senior-level and specialist placements globally.",
        filters_title: "Filter Positions",
        clear_filters: "Clear All",
        filter_search_lbl: "Search Keyword",
        filter_search_ph: "e.g., Engineer, Manager...",
        filter_dept_lbl: "Department",
        filter_loc_lbl: "Location",
        filter_type_lbl: "Employment Type",
        dept_tech: "Technology & AI",
        dept_finance: "Finance & Banking",
        dept_energy: "Energy & CleanTech",
        dept_healthcare: "Healthcare / Life Sci",
        type_permanent: "Permanent Placement",
        type_interim: "Interim Position",
        type_contract: "Contract / Consultancy",
        positions_found: "positions available",
        sort_by_lbl: "Sort by:",
        sort_recent: "Most Recent",
        sort_salary_high: "Salary: High to Low",
        sort_salary_low: "Salary: Low to High",
        quick_apply: "Quick Apply",
        ai_match_short: "AI Matcher",
        job_details_head: "Job Details",
        job_req_head: "Core Competencies & Requirements",
        job_ben_head: "Compensations & Benefits",
        select_job_placeholder_h: "Select a Position",
        select_job_placeholder_t: "Select any open recruitment card on the left to inspect professional details, capabilities checklist, and benefits structure.",
        match_score_lbl: "AI MATCH INDEX",
        skills_required: "Key Skills & Vetting Stack",
        
        // AI Matcher
        ai_title: "Instant AI Candidate Matcher",
        ai_desc: "Match your professional background against active vacancies instantly. Upload your resume or paste your key skill-sets below.",
        upload_headline: "Drag & Drop Resume here",
        upload_subline: "Supports PDF, DOCX, TXT (Max 5MB)",
        upload_browse_btn: "Browse File",
        or_text: "OR",
        ai_textarea_label: "Paste Resume Content or Key Skills",
        ai_textarea_ph: "e.g. Lead React Developer with 6 years experience in finance systems, Kubernetes, and Node.js...",
        ai_match_btn: "Analyze Capability Alignment",
        ai_idle_title: "Waiting for Input",
        ai_idle_desc: "Submit your details to activate real-time wervings matching analytics.",
        ai_scanning_title: "Analyzing Competencies...",
        ai_scanning_desc: "Matching parsed text elements against client technical requirement stacks.",
        ai_score_match: "Overall Match Score",
        ai_score_details: "Highly compatible with active Brainbox recruitments.",
        top_matches_title: "Recommended Vacancies:",
        skills_gap_title: "Keywords Identified:",
        
        // Blog
        blog_subtitle: "BRAINBOX INSIGHTS",
        blog_title: "Recruitment News & Strategy",
        blog_desc: "Insightful analyses of executive wervingsmarkten and staffing strategy.",
        cat_recruitment: "Recruitment",
        cat_technology: "Technology",
        cat_leadership: "Leadership",
        read_5m: "5 min read",
        read_8m: "8 min read",
        read_6m: "6 min read",
        blog1_title: "Future of Work: Trends Shaping the Workforce",
        blog1_text: "Discover how hybrid spaces, automation, and fractional leadership structures will shape the hiring decisions of global enterprises.",
        blog2_title: "Why IT Staffing is Crucial for Business Growth",
        blog2_text: "Scaling technology units requires specialized recruiters who understand software architecture and data pipelines.",
        blog3_title: "Top Skills Employers Will Look for in 2026",
        blog3_text: "From AI systems engineering to regulatory compliance, find out which skillsets are experiencing massive market demand.",
        blog4_title: "Building High-Performance Teams: Best Practices",
        blog4_text: "A guide to establishing collaborative trust, engineering velocity, and solid recruitment standards for modern tech organizations.",
        read_article: "Read Article <span class=\"blog-arrow\">&rarr;</span>",
        
        // Contact
        contact_title: "Get in Touch",
        contact_intro: "Fill out the brief form below, and our werving team will reach out to you within 24 hours.",
        form_name: "Full Name",
        form_name_ph: "John Doe",
        form_email: "Corporate Email",
        form_email_ph: "john@company.com",
        form_company: "Organization / Company",
        form_company_ph: "e.g. Apex Systems",
        form_interest: "Service of Interest",
        opt_exec: "Executive Search",
        opt_interim: "Interim Management",
        opt_permanent: "Permanent Placement",
        opt_rpo: "RPO Services",
        opt_career: "Career Search / Candidate Query",
        form_message: "Project Details / Message",
        form_message_ph: "Tell us about your staffing requirements...",
        form_gdpr: "I consent to Brainbox Staffing processing my details in accordance with GDPR privacy policies.",
        form_submit_btn: "Submit Inquiry",
        success_banner_title: "Thank you!",
        success_banner_desc: "Your werving inquiry has been successfully sent. A Brainbox representative will call you shortly.",
        hq_title: "Amsterdam Headquarters",
        
        // Footer
        footer_tagline: "Sourcing premium intellects and leadership talents for European, US and global enterprises.",
        footer_services: "Services",
        footer_sectors: "Sectors",
        footer_sec_tech: "Technology & AI",
        footer_sec_fin: "Finance & Fintech",
        footer_sec_en: "Energy & CleanTech",
        footer_sec_sci: "Life Sciences & Pharma",
        footer_newsletter_title: "Newsletter",
        footer_newsletter_desc: "Receive market-leading salary indices, executive trends and wervingsstudies.",
        newsletter_email_ph: "email@company.com",
        newsletter_submit_btn: "Subscribe",
        copyright_text: "All rights reserved. Inspired by Brainbox Consulting.",
        legal_privacy: "Privacy Policy",
        legal_terms: "Terms of Service",
        legal_cookies: "Cookie Settings",
        no_matching_jobs: "No highly compatible positions identified. Try expanding your skills summary.",
        salary_drawer_title: "Salary Benchmark Report",
        talent_drawer_title: "Elite Interim Leaders"
    },
    nl: {
        meta_title: "Brainbox Staffing | Premium Executive Werving & Interim Staffing",
        meta_description: "Premium werving en selectie, executive search en interim management oplossingen. Geïnspireerd door Brainbox Consulting.",
        skip_to_content: "Ga direct naar de inhoud",
        announcement_text: "🚀 Optimaliseer uw talentstrategie met onze premium senior recruitments.",
        announcement_cta: "Bekijk Openstaande Posities &rarr;",
        nav_services: "Diensten",
        nav_why_us: "Waarom Wij",
        nav_industries: "Sectoren",
        nav_leadership: "Ons Team",
        nav_jobs: "Vacatures",
        nav_ai_matcher: "AI Matcher",
        nav_blog: "Inzichten",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "✨ Premium Werving voor Corporate & Tech",
        hero_title: "Werving in uitmuntendheid een haalbare standaard maken",
        hero_subtitle: "Verbinden van bedrijven met top talent via detachering, werving, consultancy en personeelsoplossingen.",
        hero_cta_hire: "Talent Inhuren",
        hero_cta_jobs: "Vind Mogelijkheden",
        hero_stats_banner: `<span class="banner-badge">Wereldwijd Talent. Lokale Impact.</span><span class="banner-numbers"><strong>10K+</strong> Succesvolle Plaatsingen</span>`,
        trusted_by_title: "VERTROUWD DOOR TOONAANGEVENDE ONDERNEMINGEN WERELDWIJD",
        
        // Services

        filter_all: "Alle Rollen",
        filter_devops: "Cloud/DevOps",
        filter_software: "Software Eng",
        filter_ai: "AI/Data",
        btn_match: "Talent Matchen",
                services_subtitle: "GESPECIALISEERDE RECRUITMENT DIENSTEN",
        services_title: "Werving op Maat & Executive Search",
        services_desc: "Het matchen van wervingsprofessionals met marktleiders via beproefde methoden.",
        service1_title: "Detachering",
        service1_text: "Schaal uw team snel op met ervaren professionals op projectbasis.",
        service2_title: "Vaste Werving",
        service2_text: "Vind het juiste talent voor langdurig succes binnen uw organisatie.",
        service3_title: "Deta-Vast",
        service3_text: "Evalueer talent op de werkvloer voordat u een vaste verbintenis aangaat.",
        service4_title: "Executive Search",
        service4_text: "Wij vinden leiders die uw visie en transformatie vormgeven.",
        service5_title: "Personeelsoplossingen",
        service5_text: "End-to-end oplossingen voor een toekomstbestendig personeelsbestand.",
        service6_title: "Training & Ontwikkeling",
        service6_text: "Ontwikkel uw personeel. Geef de toekomst vorm.",
        service_cta: "Aanvragen &rarr;",
        service_browse_jobs: "Vacatures Bekijken &rarr;",
        
        // Why Us
        why_us_subtitle: "WAAROM BRAINBOX STAFFING",
        why_us_title: "Waarom Kiezen voor Brainbox",
        why_us_desc: "Wij vullen niet alleen wervingsvacatures in; we bouwen duurzame teamstructuren. Onze wervingsbenadering leidt tot hoge retentie.",
        why_bullet1_h: "Sectorspecifieke Experts",
        why_bullet1_t: "Onze recruiters hebben actieve ervaring in de sectoren en wervingstechnologieën waarin zij werven.",
        why_bullet2_h: "Wereldwijd Bereik, Lokale Aanwezigheid",
        why_bullet2_t: "Gevestigd in Nederland, actief met werven in heel Europa, de VS en het VK.",
        why_stat1_label: "Klanten Wereldwijd",
        why_stat2_label: "Succesvolle Plaatsingen",
        why_stat3_label: "Klanttevredenheid",
        why_stat4_label: "Van Uitmuntendheid",
        
        // Industries (Rebranded to Technical Expertise)
        industries_subtitle: "ONZE EXPERTISE & WERVINGSDOMEINEN",
        industries_title: "Onze Domein & Technische Expertise",
        industries_desc: "Verbinden van organisaties met gespecialiseerde professionals in hoogtechnologische engineering- en consultancyrollen.",
        role_embedded: "Embedded Systems Developers",
        role_iot: "High Tech (IoT)",
        role_testing: "Software Testing",
        role_devops: "DevOps Engineers",
        role_app_cons: "Application Consultants",
        role_erp: "ERP Consultants",
        role_pm: "Project- en Programmamanagers",
        role_automation: "Industrial Automation Engineers",

        // Panel Badges
        ind_it_badge: "IT & Software",
        ind_hc_badge: "Gezondheidszorg",
        ind_fin_badge: "Bankwezen & Finance",
        ind_mfg_badge: "Productie",
        ind_rtl_badge: "Retail & E-commerce",
        ind_tel_badge: "Telecom",

        // Panel Descriptions
        panel_tech_desc: "We schalen hoogwaardige SaaS-teams op, bouwen geavanceerde AI-afdelingen en werven top cloudinfrastructuurarchitecten. Onze grondige screening garandeert echte technische ervaring.",
        panel_hc_desc: "Levering van executive zorgdirecteuren, bestuursleden en interim ziekenhuismanagers om systemen door regelgevende transformaties en operationele efficiëntiedoelen te leiden.",
        panel_fin_desc: "Verbinden van commerciële banken, fintech-scale-ups en wereldwijde vermogensbeheerders met kwantitatieve analisten, compliance-leiders en CFO's die groei stimuleren.",
        panel_mfg_desc: "Werven van fabrieksdirecteuren, wereldwijde supply chain officers en operational excellence leads die Lean Six Sigma-normen implementeren in productiefaciliteiten.",
        panel_rtl_desc: "Retailmerken, e-commerce reuzen en moderne logistieke bedrijven verbinden met digitale directeurs, supply chain managers en hoofden van logistieke operaties.",
        panel_tel_desc: "Werven van ervaren netwerkplanningsengineers, 5G-uitrolexperts en chief infrastructuurarchitecten om moderne bedrijfstelecommunicatiesystemen uit te breiden.",

        // Labels
        lbl_fill_time: "Gem. Vervullingstijd",
        lbl_active_pool: "Actief Talent",
        lbl_retention: "Retentiepercentage",
        lbl_skill_stack: "Kernvaardigheden",
        btn_hire_tech: "Werven van Tech Leaders &rarr;",
        btn_hire_hc: "Werven van Zorgleiders &rarr;",
        btn_hire_fin: "Werven van Finance Leaders &rarr;",
        btn_hire_mfg: "Werven van Productieleiders &rarr;",
        btn_hire_rtl: "Werven van E-commerce Leaders &rarr;",
        btn_hire_tel: "Werven van Telecom Leaders &rarr;",
        
        // Hiring Process
        hiring_subtitle: "ONZE SYSTEMATISCHE AANPAK",
        hiring_title: "Ons Wervingsproces",
        step1_title: "Talent Sourcing",
        step1_desc: "We identificeren en benaderen potentieel talent via ons wereldwijde netwerk en premium wervingskanalen.",
        step2_title: "Screening & Selectie",
        step2_desc: "Een grondige selectiefase waarin we vaardigheden, soft skills, culturele fit en carrièredoelen controleren.",
        step3_title: "Interview & Assessment",
        step3_desc: "Kandidaten ondergaan gestructureerde technische evaluaties en code-audits door ervaren tech leads.",
        step4_title: "Selectie & Aanbod",
        step4_desc: "Laatste selectieronde met stakeholders, referentiechecks, salarisbenchmarking en een formeel contractaanbod.",
        step5_title: "Onboarding & Support",
        step5_desc: "Naadloze onboarding ondersteund door onze HR-teams en periodieke voortgangsgesprekken.",
        
        // Success Stories
        success_subtitle: "BEWEZEN RESULTATEN",
        success_title: "Succesverhalen",
        success_stat1_lbl: "Kortere Wervingstijd",
        success_stat2_lbl: "Klantretentie",
        success_stat3_lbl: "Succesvolle Plaatsingen",
        success_stat4_lbl: "Tevreden Klanten",
        
        // Testimonials
        testimonials_subtitle: "WAT KLANTEN ZEGGEN",
        testimonials_title: "Wat Onze Klanten Zeggen",
        t1_quote: `"Brainbox Consulting is essentieel een rol geweest om ons snel te helpen top talent te vinden. Hun team begrijpt onze behoeften perfect."`,
        t2_quote: `"Hun professionaliteit en toewijding aan kwaliteit zijn ongeëvenaard. Sterk aanbevolen!"`,
        t3_quote: `"Een betrouwbare partner voor al onze personeelsbehoeften. Elke keer weer uitzonderlijke service."`,
        
        // Leadership
        team_subtitle: "ONZE TEAMLEDEN",
        team_title: "Brainbox Consulting Teamleden",
        team_desc: "Ervaren professionals die wervingsstrategieën coördineren voor vooraanstaande zakelijke relaties.",
        team_ceo_pos: "Oprichter & Algemeen Directeur",
        team_ceo_bio: "Meer dan 20 jaar ervaring in executive headhunting en wervingsconsulting. Gedreven om strategen te verbinden.",
        team_ceo_tag1: "Strategie",
        team_ceo_tag2: "Headhunting",
        team_ceo_quote: `"Leiders werven gaat over het verbinden van visie met actie."`,
        team_coo_pos: "Partner, Tech & Interim Diensten",
        team_coo_bio: "Leidt de tech-wervingsdivisie. Expert in interim-management en het opschalen van agile tech start-ups.",
        team_coo_tag1: "Interim Ops",
        team_coo_tag2: "Tech Opschalen",
        team_coo_quote: `"Interim-management vereist onmiddellijke helderheid in complexiteit."`,
        team_cto_pos: "Chief Technology Officer (CTO)",
        team_cto_bio: "Meer dan 15 jaar ervaring in software-architectuur. Sarah coördineert onze technische assessments en AI wervingspipelines.",
        team_cto_tag1: "Vetting Systemen",
        team_cto_tag2: "AI Pipelines",
        team_cto_quote: `"Onze technische screening zorgt ervoor dat vaardigheden worden geverifieerd door actieve engineers."`,
        team_director_pos: "Directeur Enterprise Relaties",
        team_director_bio: "Coördineert recruitment outsourcing (RPO) en wervingscampagnes binnen de EU & VS.",
        team_director_tag1: "Zakelijke Klanten",
        team_director_tag2: "RPO Programma's",
        team_director_quote: `"Langdurige zakelijke partnerschappen zijn gebouwd op door statistieken bewezen vertrouwen."`,
        team_hr_pos: "Hoofd Personeelszaken",
        team_hr_bio: "Beheert onze interne cultuur, compliance-audits en strategische onboarding-ondersteuning voor sleutelposities.",
        team_hr_tag1: "Mens & Cultuur",
        team_hr_tag2: "Compliance",
        team_hr_quote: `"Succesvolle onboarding is waar het potentieel van de kandidaat de organisatiecultuur ontmoet."`,
        
        // Jobs Portal
        jobs_subtitle: "ACTIEVE WERVINGEN",
        jobs_title: "Ontdek Carrièremogelijkheden",
        jobs_desc: "Zoek en solliciteer op senior-level en wervingsposities wereldwijd.",
        filters_title: "Posities Filteren",
        clear_filters: "Wis Filters",
        filter_search_lbl: "Zoekwoord",
        filter_search_ph: "bijv., Engineer, Manager...",
        filter_dept_lbl: "Afdeling",
        filter_loc_lbl: "Locatie",
        filter_type_lbl: "Dienstverband",
        dept_tech: "Technologie & AI",
        dept_finance: "Finance & Bankwezen",
        dept_energy: "Energie & CleanTech",
        dept_healthcare: "Gezondheidszorg / Life Sci",
        type_permanent: "Vaste Aanstelling",
        type_interim: "Interim Positie",
        type_contract: "Contract / Consultancy",
        positions_found: "posities beschikbaar",
        sort_by_lbl: "Sorteren op:",
        sort_recent: "Meest Recent",
        sort_salary_high: "Salaris: Hoog naar Laag",
        sort_salary_low: "Salaris: Laag naar Hoog",
        quick_apply: "Direct Solliciteren",
        ai_match_short: "AI Match",
        job_details_head: "Functie Details",
        job_req_head: "Kerncompetenties & Vereisten",
        job_ben_head: "Arbeidsvoorwaarden & Voordelen",
        select_job_placeholder_h: "Selecteer een Functie",
        select_job_placeholder_t: "Selecteer een geopende wervingskaart aan de linkerkant om de details te inspecteren.",
        match_score_lbl: "AI MATCH INDEX",
        skills_required: "Belangrijkste vaardigheden",
        
        // AI Matcher
        ai_title: "Directe AI Kandidaat Matcher",
        ai_desc: "Match uw wervingsachtergrond direct met actieve vacatures. Upload uw cv of plak hieronder uw vaardigheden.",
        upload_headline: "Sleep uw CV hiernaartoe",
        upload_subline: "Ondersteunt PDF, DOCX, TXT (Max 5MB)",
        upload_browse_btn: "Bladeren",
        or_text: "OF",
        ai_textarea_label: "Plak CV Inhoud of Vaardigheden",
        ai_textarea_ph: "bijv. Lead React Developer met 6 jaar wervingservaring in financiële systemen, Kubernetes en Node.js...",
        ai_match_btn: "Analyseer Match Competenties",
        ai_idle_title: "Wachten op Invoer",
        ai_idle_desc: "Verstuur uw wervingsgegevens om de wervingsmatching te activeren.",
        ai_scanning_title: "Competenties Analyseren...",
        ai_scanning_desc: "Geparseerde tekst-elementen matchen met de technische wervingsvereisten.",
        ai_score_match: "Totale Match Score",
        ai_score_details: "Zeer wervingscompatibel met wervingen van Brainbox.",
        top_matches_title: "Aanbevolen Vacatures:",
        skills_gap_title: "Geïdentificeerde Sleutelwoorden:",
        
        // Blog
        blog_subtitle: "BRAINBOX INZICHTEN",
        blog_title: "Recruitment Nieuws & Strategie",
        blog_desc: "Diepgaande wervingsanalyses van de wervingsmarkt en modern talent werving.",
        cat_recruitment: "Recruitment",
        cat_technology: "Technologie",
        cat_leadership: "Leiderschap",
        read_5m: "5 min leestijd",
        read_8m: "8 min leestijd",
        read_6m: "6 min leestijd",
        blog1_title: "Future of Work: Trends Shaping the Workforce",
        blog1_text: "Ontdek hoe hybride ruimtes, automatisering en fractional leadership de aannamebeslissingen van grote ondernemingen beïnvloeden.",
        blog2_title: "Waarom IT-staffing cruciaal is voor bedrijfsgroei",
        blog2_text: "Het opschalen van technologie-afdelingen vereist recruiters die software-architectuur en datapijplijnen begrijpen.",
        blog3_title: "Sleutelvaardigheden waar werkgevers naar zoeken in 2026",
        blog3_text: "Van AI-systeemengineering tot compliance, ontdek naar welke vaardigheden de markt vraagt.",
        blog4_title: "High-Performance Teams Bouwen: Best Practices",
        blog4_text: "Een gids voor het opbouwen van vertrouwen, ontwikkelsnelheid en solide wervingsstandaarden.",
        read_article: "Lees Artikel <span class=\"blog-arrow\">&rarr;</span>",
        
        // Contact
        contact_title: "Neem Contact Op",
        contact_intro: "Vul het onderstaande wervingsformulier in en ons wervings-team neemt binnen 24 uur contact op.",
        form_name: "Volledige Naam",
        form_name_ph: "Jan de Vries",
        form_email: "Zakelijk E-mailadres",
        form_email_ph: "jan@bedrijf.nl",
        form_company: "Organisatie / Bedrijf",
        form_company_ph: "bijv. Apex Systems",
        form_interest: "Dienst van Interesse",
        opt_exec: "Executive Search",
        opt_interim: "Interim Management",
        opt_permanent: "Vaste Werving",
        opt_rpo: "RPO Oplossingen",
        opt_career: "Carrièremogelijkheden / Kandidaatvraag",
        form_message: "Project Details / Bericht",
        form_message_ph: "Vertel ons over uw wervingsbehoeften...",
        form_gdpr: "Ik geef wervings-toestemming om mijn gegevens te verwerken in overeenstemming met de GDPR.",
        form_submit_btn: "Verstuur Aanvraag",
        success_banner_title: "Dank u wel!",
        success_banner_desc: "Uw aanvraag is succesvol verzonden. Een adviseur van Brainbox neemt spoedig contact op.",
        hq_title: "Hoofdkantoor Amsterdam",
        
        // Footer
        footer_tagline: "Werving van top-tier wervingsintellect en leiderschapstalent voor ondernemingen.",
        footer_services: "Diensten",
        footer_sectors: "Sectoren",
        footer_sec_tech: "Technologie & AI",
        footer_sec_fin: "Finance & Fintech",
        footer_sec_en: "Energie & CleanTech",
        footer_sec_sci: "Life Sciences & Pharma",
        footer_newsletter_title: "Nieuwsbrief",
        footer_newsletter_desc: "Ontvang marktindices, wervingsrapporten en wervingsstudies rechtstreeks in uw inbox.",
        newsletter_email_ph: "e-mail@bedrijf.nl",
        newsletter_submit_btn: "Inschrijven",
        copyright_text: "Alle rechten voorbehouden. Geïnspireerd door Brainbox Consulting.",
        legal_privacy: "Privacybeleid",
        legal_terms: "Algemene Voorwaarden",
        legal_cookies: "Cookie-instellingen",
        no_matching_jobs: "Geen wervingen gevonden. Probeer uw vaardigheden verder uit te breiden.",
        salary_drawer_title: "Salaris Benchmark Rapport",
        talent_drawer_title: "Elite Interim Leiders"
    }
};

// Global State
let currentLang = localStorage.getItem('brainbox-lang') || 'en';
let currentTheme = 'light';
let selectedJobId = null;
const jobFilters = {
    search: "",
    departments: [],
    locations: [],
    types: [],
    sortBy: "recent"
};

// --- DOCK MOCK RECRUITMENT DATABASE ---
const jobsDatabase = [
    {
        id: "job-1",
        title: "Lead AI/ML Systems Architect",
        title_nl: "Lead AI/ML Systems Architect",
        company: "Apex Systems",
        department: "technology",
        location: "amsterdam",
        type: "permanent",
        salary: 115000,
        salaryDisplay: "€105k - €125k",
        skills: ["AI", "Python", "Cloud", "AWS", "PyTorch", "Kubernetes", "Architect"],
        date: "2026-06-20",
        description: "Designing end-to-end scalable machine learning pipelines and deep learning server configurations for international fintech operations.",
        description_nl: "Ontwerpen van end-to-end schaalbare machine learning pipelines en deep learning serverconfiguraties voor internationale fintech-operaties.",
        requirements: [
            "Minimum 6+ years designing scalable cloud data engineering architectures.",
            "Expertise in deep learning wervings-tooling (PyTorch, TensorFlow, MLflow).",
            "Advanced experience with containerization using Kubernetes and Docker.",
            "Master's Degree in Data Sciences, Engineering, or Mathematics."
        ],
        requirements_nl: [
            "Minimaal 6+ jaar ervaring in het ontwerpen van schaalbare cloud data-architecturen.",
            "Expertise in deep learning wervings-tooling (PyTorch, TensorFlow, MLflow).",
            "Gevorderde ervaring met containerisatie met Kubernetes en Docker.",
            "Masterdiploma in Data Sciences, Engineering of Wiskunde."
        ],
        benefits: [
            "Highly competitive base salary + annual performance bonuses.",
            "Mobility budget (including electric vehicle options) or fully covered transit lease.",
            "Premium health coverage and dedicated personal wellness stipend.",
            "State of the art home-office configuration allowance."
        ],
        benefits_nl: [
            "Zeer concurrerend basissalaris + wervings-prestatiebonussen.",
            "Mobiliteitsbudget (inclusief wervings-leaseauto's) of NS-businesscard.",
            "Premium aanvullende zorgverzekering en persoonlijk vitaliteitsbudget.",
            "Ruime vergoeding voor inrichten van een ergonomische thuiswerkplek."
        ]
    },
    {
        id: "job-2",
        title: "Interim Chief Financial Officer (CFO)",
        title_nl: "Interim Chief Financial Officer (CFO)",
        company: "Valo Labs",
        department: "finance",
        location: "rotterdam",
        type: "interim",
        salary: 180000,
        salaryDisplay: "€950 - €1200 / day",
        skills: ["CFO", "Finance", "Merger", "Management", "Risk", "Strategy"],
        date: "2026-06-22",
        description: "Steering operational finance models and supervising compliance auditing controls through a complex corporate merger process.",
        description_nl: "Aansturen van operationele financiële modellen en toezicht houden op compliance-audits tijdens een complex fusieproces.",
        requirements: [
            "10+ years executive leadership background inside biotech or commercial banking.",
            "Extensive background in post-merger operations restructuring and scale-ups.",
            "Registered RA/RC credentials are highly prioritized.",
            "Fluency in English and Dutch language is mandatory."
        ],
        requirements_nl: [
            "10+ jaar ervaring als financieel directeur binnen biotech of bankwezen.",
            "Uitgebreide achtergrond in post-merger integraties en herstructureringen.",
            "Geregistreerde RA/RC-kwalificatie is een grote wervings-pré.",
            "Vloeiend in zowel Engels als Nederlands is vereist."
        ],
        benefits: [
            "Flexible interim contract model (6 months baseline with extension option).",
            "Immediate operational steering authority reporting directly to Board.",
            "Premium administrative and travel expense reimbursement controls."
        ],
        benefits_nl: [
            "Flexibele interim-overeenkomst (basis van 6 maanden met optie tot verlenging).",
            "Directe wervings-operationele beslissingsbevoegdheid, rapporterend aan de RvB.",
            "Volledige reiskosten- en onkostenvergoeding."
        ]
    },
    {
        id: "job-3",
        title: "Senior Full-Stack React/Node Engineer",
        title_nl: "Senior Full-Stack React/Node Engineer",
        company: "Nexus Tech Group",
        department: "technology",
        location: "remote",
        type: "permanent",
        salary: 92000,
        salaryDisplay: "€85k - €95k",
        skills: ["React", "Node.js", "JavaScript", "Kubernetes", "Docker", "SaaS"],
        date: "2026-06-15",
        description: "Building responsive components and microservices structures for high-performance enterprise dashboard applications.",
        description_nl: "Bouwen van responsieve componenten en microservices-structuren voor high-performance enterprise dashboard-applicaties.",
        requirements: [
            "4+ years building responsive wervings-dashboards in React.js and TypeScript.",
            "Strong backend capabilities designing Node.js REST / GraphQL endpoints.",
            "Familiarity with cloud deployments (AWS ECS, Docker structures).",
            "Proactive agile communicator comfortable with remote workflow styles."
        ],
        requirements_nl: [
            "4+ jaar ervaring met het bouwen van responsieve SPA's in React.js en TypeScript.",
            "Sterke backend vaardigheden met Node.js REST / GraphQL API's.",
            "Bekend met cloud deployments (AWS ECS, Docker structuren).",
            "Proactieve agile communicator gewend aan een volledig remote workflow."
        ],
        benefits: [
            "100% remote flexibility with optional core hub office keys.",
            "30 vacation days + local state holiday calendars.",
            "Dedicated yearly €3k training and conference budgets."
        ],
        benefits_nl: [
            "100% remote werken met toegang tot onze gedeelde wervings-kantoorlocaties.",
            "30 vakantiedagen + feestdagenregeling.",
            "Jaarlijks studiebudget van €3.000 voor trainingen en congressen."
        ]
    },
    {
        id: "job-4",
        title: "Renewable Energy Grid Planner",
        title_nl: "Renewable Energy Grid Planner",
        company: "Aether CleanTech",
        department: "energy",
        location: "utrecht",
        type: "permanent",
        salary: 88000,
        salaryDisplay: "€80k - €95k",
        skills: ["Energy", "Grid", "Project Management", "CleanTech", "Engineering"],
        date: "2026-06-18",
        description: "Managing technical blueprints and grid integration workflows for high-voltage offshore solar and wind cluster farms.",
        description_nl: "Beheren van technische blauwdrukken en netwerkintegratieworkflows voor offshore zonne- en windparken.",
        requirements: [
            "Bachelor's/Master's Degree in Electrical Engineering or Sustainable Energy Systems.",
            "Familiarity with Dutch energy grid standards (TenneT requirements).",
            "Project management certificate (Prince2 or Agile PM) is preferred.",
            "Experience mapping high-voltage substations blueprints."
        ],
        requirements_nl: [
            "Bachelor/Master-diploma in Elektrotechniek of Duurzame Energiesystemen.",
            "Bekend met wervings-energienetnormen (TenneT-vereisten).",
            "Projectmanagement-certificaat (Prince2 of Agile PM) is een pré.",
            "Ervaring met het in kaart brengen van hoogspanningsstations."
        ],
        benefits: [
            "Opportunity to pilot key European green energy transitions.",
            "Favorable pension schemes matching public infrastructure standards.",
            "Company-provided electric lease vehicle."
        ],
        benefits_nl: [
            "Kans om de Europese energietransitie op nationaal niveau aan te sturen.",
            "Uitstekende pensioenregeling volgens de wervings-cao.",
            "Elektrische leaseauto van de zaak."
        ]
    },
    {
        id: "job-5",
        title: "Senior Regulatory Affairs Manager",
        title_nl: "Senior Regulatory Affairs Manager",
        company: "Kronos Pharma",
        department: "healthcare",
        location: "amsterdam",
        type: "permanent",
        salary: 105000,
        salaryDisplay: "€98k - €112k",
        skills: ["Pharma", "Compliance", "Regulatory", "QA", "Clinical Research"],
        date: "2026-06-10",
        description: "Supervising drug development submission approvals with EMA, FDA, and EU health standards bodies.",
        description_nl: "Toezicht houden op goedkeuringsdossiers voor medicijnontwikkeling bij EMA, FDA en EU-gezondheidsinstanties.",
        requirements: [
            "Degree in Life Sciences, Pharmacy, or Clinical Chemistry.",
            "5+ years direct liaison experience with EMA drug approval frameworks.",
            "Familiarity with Good Clinical Practice (GCP) quality audits.",
            "Excellent regulatory legal brief writing capabilities."
        ],
        requirements_nl: [
            "Diploma in Life Sciences, Farmacie of Klinische Chemie.",
            "5+ jaar ervaring met registraties bij het CBG en EMA.",
            "Bekend met GCP wervings-kwaliteitsaudits.",
            "Uitstekende vaardigheid in het schrijven van juridische toelichtingen."
        ],
        benefits: [
            "Attractive healthcare premium matching schemes.",
            "Flexible flex-hours options supporting parenting workflows.",
            "Lucrative performance-related company bonus schemes."
        ],
        benefits_nl: [
            "Aantrekkelijke wervings-zorgregelingen.",
            "Flexibele werktijden en ruime gezinsvriendelijke verlofregelingen.",
            "Winstdelingsregeling op basis van wervingsresultaten."
        ]
    },
    {
        id: "job-6",
        title: "Interim DevOps Tech Lead",
        title_nl: "Interim DevOps Tech Lead",
        company: "Vertex Logistics",
        department: "technology",
        location: "rotterdam",
        type: "interim",
        salary: 145000,
        salaryDisplay: "€800 - €950 / day",
        skills: ["Kubernetes", "AWS", "CI/CD", "Docker", "Terraform", "Python"],
        date: "2026-06-19",
        description: "Migrating legacy warehousing software stacks into modern containerized AWS cloud infrastructure setups.",
        description_nl: "Migreren van legacy magazijnsoftware naar moderne gecontaineriseerde AWS cloud-infrastructuuromgevingen.",
        requirements: [
            "5+ years active contract engineering background within DevOps.",
            "Expert Terraform structures building across wervings cloud accounts.",
            "Production deployments managing massive scale Kubernetes clusters.",
            "Available for immediate onboarding in Rotterdam."
        ],
        requirements_nl: [
            "5+ jaar actieve ervaring als interim DevOps engineer.",
            "Expert in Terraform en het opzetten van multi-account AWS structuren.",
            "Ervaring met grote, schaalbare Kubernetes clusters in productieomgevingen.",
            "Op korte termijn wervings-beschikbaar voor onboarding."
        ],
        benefits: [
            "Initial 9-month contract scope with probable extension.",
            "Modern, premium office workspace in the heart of Rotterdam Port Hub.",
            "Weekly remote rotation arrangements (3 days remote, 2 days onsite)."
        ],
        benefits_nl: [
            "Eerste contractduur van 9 maanden met grote wervings-verlengingskans.",
            "Kantoorlocatie in het Rotterdamse wervingsgebied.",
            "Hybride werkregeling (3 dagen thuis, 2 dagen op locatie)."
        ]
    }
];

// --- 4. THEME CONTROLLER & MAP TILES ---
document.addEventListener("DOMContentLoaded", () => {
    const initFunctions = [
        { name: "Theme", fn: initTheme },
        { name: "Language", fn: initLanguage },
        { name: "MobileMenu", fn: initMobileMenu },
        { name: "HeroCanvas", fn: initHeroCanvas },
        { name: "AIMatcherCanvas", fn: initAIMatcherCanvas },
        { name: "IndustryCards", fn: initIndustryCards },
        { name: "Carousel", fn: initCarousel },
        { name: "JobPortal", fn: initJobPortal },
        { name: "AIMatcher", fn: initAIMatcher },
        { name: "Map", fn: initMap },
        { name: "ContactForm", fn: initContactForm },
        { name: "HeaderScroll", fn: initHeaderScroll },
        { name: "FilterCollapsible", fn: initFilterCollapsible },
        { name: "Drawers", fn: initDrawers },
        { name: "LeadershipAccordion", fn: initLeadershipAccordion }
    ];

    initFunctions.forEach(item => {
        try {
            item.fn();
        } catch (err) {
            console.error(`Error initializing ${item.name}:`, err);
        }
    });
});

function initTheme() {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute("data-theme", "light");
}

// --- Language Controller ---
function initLanguage() {
    const langBtn = document.getElementById("lang-toggle-btn");
    const langListbox = document.getElementById("lang-listbox");
    const currentCodeEl = document.getElementById("current-lang-code");
    
    currentCodeEl.textContent = currentLang.toUpperCase();
    translatePage();

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const expanded = langBtn.getAttribute("aria-expanded") === "true";
        langBtn.setAttribute("aria-expanded", !expanded);
        langListbox.classList.toggle("show");
    });

    const options = langListbox.querySelectorAll("li");
    options.forEach(opt => {
        if(opt.getAttribute("data-lang") === currentLang) {
            options.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
        }

        opt.addEventListener("click", () => {
            currentLang = opt.getAttribute("data-lang");
            localStorage.setItem("brainbox-lang", currentLang);
            currentCodeEl.textContent = currentLang.toUpperCase();
            
            options.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            
            langBtn.setAttribute("aria-expanded", "false");
            langListbox.classList.remove("show");
            
            translatePage();
            renderJobsList();
            if (selectedJobId) {
                renderJobDetail(selectedJobId);
            }
            // Re-render talent cards in drawer if open
            renderTalentDrawer();
            // Re-render salary chart if open
            if(document.getElementById("salary-drawer").classList.contains("open")) {
                const activeTab = document.querySelector(".tab-btn.active");
                if (activeTab) renderSalaryChart(activeTab.getAttribute("data-sector"));
            }
        });
    });

    document.addEventListener("click", () => {
        langBtn.setAttribute("aria-expanded", "false");
        langListbox.classList.remove("show");
    });
}

function translatePage() {
    const dict = translations[currentLang];
    
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            const pulseSpan = el.querySelector(".ai-pulse");
            if (pulseSpan) {
                el.innerHTML = `<span class="ai-pulse"></span>${dict[key]}`;
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    const attrElements = document.querySelectorAll("[data-i18n-attr]");
    attrElements.forEach(el => {
        const attrVal = el.getAttribute("data-i18n-attr");
        const parts = attrVal.split(":");
        const attrName = parts[0];
        const key = parts[1];
        if (dict[key]) {
            el.setAttribute(attrName, dict[key]);
        }
    });
}

function initHeaderScroll() {
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const header = document.getElementById("main-header");
    const navLinks = document.querySelectorAll(".nav-link");

    toggleBtn.addEventListener("click", () => {
        const opened = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", !opened);
        header.classList.toggle("menu-open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleBtn.setAttribute("aria-expanded", "false");
            header.classList.remove("menu-open");
        });
    });
}

function initHeroCanvas() {
    const hub = document.getElementById("talent-network-hub");
    const container = document.getElementById("hero-interactive-trigger");
    const svg = document.getElementById("network-svg");
    const pathGroup = document.getElementById("network-paths");
    const simulateBtn = document.getElementById("simulate-match-btn");
    const tooltip = document.getElementById("network-tooltip");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const nodes = document.querySelectorAll(".network-node");
    const engineNode = document.getElementById("node-engine");

    if (!hub || !container || !svg || !pathGroup || !simulateBtn || !tooltip) return;

    const nodePositions = {
        engine: { x: 200, y: 180 }
    };

    const connections = [
        { id: "p-t1", from: "t1", to: "engine", category: "devops" },
        { id: "p-t2", from: "t2", to: "engine", category: "devops" },
        { id: "p-t3", from: "t3", to: "engine", category: "software" },
        { id: "p-t4", from: "t4", to: "engine", category: "ai" }
    ];

    const tooltipData = {
        t1: {
            en: { name: "Sven Hoogland", role: "DevOps Architect", stat1: "Exp: 9 Years", stat2: "Match Score: 98%" },
            nl: { name: "Sven Hoogland", role: "DevOps Architect", stat1: "Ervaring: 9 Jaar", stat2: "Matchingscore: 98%" }
        },
        t2: {
            en: { name: "Ewout van Vliet", role: "Fractional CTO / Architect", stat1: "Exp: 22 Years", stat2: "Match Score: 97%" },
            nl: { name: "Ewout van Vliet", role: "Fractional CTO / Architect", stat1: "Ervaring: 22 Jaar", stat2: "Matchingscore: 97%" }
        },
        t3: {
            en: { name: "Julia Meer", role: "Senior Fullstack Engineer", stat1: "Exp: 7 Years", stat2: "Match Score: 95%" },
            nl: { name: "Julia Meer", role: "Senior Fullstack Engineer", stat1: "Ervaring: 7 Jaar", stat2: "Matchingscore: 95%" }
        },
        t4: {
            en: { name: "Lars Klinkenberg", role: "Lead AI Research Scientist", stat1: "Exp: 6 Years", stat2: "Match Score: 99%" },
            nl: { name: "Lars Klinkenberg", role: "Lead AI Research Scientist", stat1: "Ervaring: 6 Jaar", stat2: "Matchingscore: 99%" }
        },
        engine: {
            en: { name: "Brainbox Engine", role: "Match Router", stat1: "Avg Match Time: 1.2s", stat2: "Placement Rate: 96.4%" },
            nl: { name: "Brainbox Engine", role: "Match Router", stat1: "Gem. Matchtijd: 1.2s", stat2: "Plaatsingsratio: 96.4%" }
        }
    };

    function updatePaths() {
        const parentRect = svg.getBoundingClientRect();
        if (parentRect.width === 0 || parentRect.height === 0) return;
        
        const getRelativeCenter = (el) => {
            const rect = el.getBoundingClientRect();
            return {
                x: (rect.left - parentRect.left + rect.width / 2) * (400 / parentRect.width),
                y: (rect.top - parentRect.top + rect.height / 2) * (360 / parentRect.height)
            };
        };
        
        nodePositions.engine = getRelativeCenter(engineNode);
        nodes.forEach(node => {
            const nodeId = node.getAttribute("data-node");
            if (nodeId) {
                nodePositions[nodeId] = getRelativeCenter(node);
            }
        });
        
        pathGroup.innerHTML = "";
        connections.forEach(conn => {
            const fromPt = nodePositions[conn.from] || { x: 200, y: 180 };
            const toPt = nodePositions[conn.to] || { x: 200, y: 180 };
            
            const isLeft = conn.from === "t1" || conn.from === "t3";
            const cp1x = isLeft ? fromPt.x + 60 : fromPt.x - 60;
            const cp1y = fromPt.y;
            const cp2x = isLeft ? toPt.x - 30 : toPt.x + 30;
            const cp2y = toPt.y;
            
            const d = `M ${fromPt.x},${fromPt.y} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${toPt.x},${toPt.y}`;
            
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            path.setAttribute("class", "network-path active-path");
            path.setAttribute("id", conn.id);
            path.setAttribute("data-category", conn.category);
            pathGroup.appendChild(path);
            
            const glowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            glowPath.setAttribute("d", d);
            glowPath.setAttribute("class", "network-path glow-path");
            glowPath.setAttribute("id", `${conn.id}-glow`);
            glowPath.setAttribute("data-category", conn.category);
            pathGroup.appendChild(glowPath);
        });
        
        const activeFilterBtn = document.querySelector(".filter-btn.active");
        if (activeFilterBtn) {
            applyFilter(activeFilterBtn.getAttribute("data-filter"));
        }
    }

    function applyFilter(category) {
        filterButtons.forEach(btn => {
            if (btn.getAttribute("data-filter") === category) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        nodes.forEach(node => {
            if (node === engineNode) return;
            const cat = node.getAttribute("data-category");
            if (category === "all" || cat === category) {
                node.classList.remove("dimmed");
                if (category !== "all") {
                    node.classList.add("active-node");
                } else {
                    node.classList.remove("active-node");
                }
            } else {
                node.classList.add("dimmed");
                node.classList.remove("active-node");
            }
        });
        
        const paths = pathGroup.querySelectorAll(".network-path");
        paths.forEach(p => {
            const cat = p.getAttribute("data-category");
            if (category === "all" || cat === category) {
                p.style.opacity = "1";
                p.style.strokeWidth = p.classList.contains("glow-path") ? "2.2" : "1.8";
            } else {
                p.style.opacity = "0.1";
                p.style.strokeWidth = "1.2";
            }
        });
    }

    function showTooltip(e, nodeId) {
        const data = tooltipData[nodeId];
        if (!data) return;
        const langData = data[currentLang] || data['en'];
        
        tooltip.querySelector(".tooltip-name").textContent = langData.name;
        tooltip.querySelector(".tooltip-role").textContent = langData.role;
        
        const statsContainer = tooltip.querySelector(".tooltip-stats");
        statsContainer.innerHTML = `
            <span class="tooltip-stat"><span>${currentLang === 'nl' ? 'Details' : 'Details'}:</span> <span>${langData.stat1}</span></span>
            <span class="tooltip-stat"><span>${currentLang === 'nl' ? 'Status' : 'Metric'}:</span> <span>${langData.stat2}</span></span>
        `;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const scale = hub.getBoundingClientRect().width / hub.offsetWidth || 1;
        
        const x = (rect.left - containerRect.left + rect.width / 2) / scale;
        const y = (rect.top - containerRect.top) / scale;
        
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.classList.add("visible");
    }

    function hideTooltip() {
        tooltip.classList.remove("visible");
    }

    function spawnParticles() {
        simulateBtn.disabled = true;
        
        const activeFilterBtn = document.querySelector(".filter-btn.active");
        const category = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
        
        const activeNodes = [];
        nodes.forEach(node => {
            if (node === engineNode) return;
            const nodeId = node.getAttribute("data-node");
            const cat = node.getAttribute("data-category");
            if (category === "all" || cat === category) {
                activeNodes.push({ node, nodeId });
            }
        });
        
        const scale = hub.getBoundingClientRect().width / hub.offsetWidth || 1;
        
        // Ingestion phase
        activeNodes.forEach(({ node }) => {
            node.style.animation = "none";
            
            const rect = node.getBoundingClientRect();
            const engineRect = engineNode.getBoundingClientRect();
            
            const dx = ((engineRect.left + engineRect.width / 2) - (rect.left + rect.width / 2)) / scale;
            const dy = ((engineRect.top + engineRect.height / 2) - (rect.top + rect.height / 2)) / scale;
            
            node.style.transition = "transform 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity 0.6s ease";
            node.style.transform = `translate(${dx}px, ${dy}px) scale(0)`;
            node.style.opacity = "0";
        });
        
        // Central engine ripple ripple
        setTimeout(() => {
            const engineCore = document.querySelector(".engine-core");
            if (engineCore) {
                engineCore.classList.remove("pulse-ripple");
                void engineCore.offsetWidth;
                engineCore.classList.add("pulse-ripple");
            }
            
            // Pop nodes back out
            setTimeout(() => {
                activeNodes.forEach(({ node }) => {
                    node.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease";
                    node.style.transform = "translate(0, 0) scale(1)";
                    node.style.opacity = "1";
                    
                    setTimeout(() => {
                        node.style.transition = "";
                        node.style.transform = "";
                        node.style.opacity = "";
                        node.style.animation = ""; // Resume floating
                    }, 600);
                });
                
                setTimeout(() => {
                    simulateBtn.disabled = false;
                }, 600);
            }, 500);
        }, 600);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-filter");
            applyFilter(category);
        });
    });

    nodes.forEach(node => {
        const nodeId = node.getAttribute("data-node") || (node.id === "node-engine" ? "engine" : null);
        if (nodeId) {
            node.addEventListener("mouseenter", (e) => showTooltip(e, nodeId));
            node.addEventListener("mouseleave", hideTooltip);
        }
    });

    simulateBtn.addEventListener("click", spawnParticles);

    // Resize observer or event to scale coordinates properly
    window.addEventListener("resize", updatePaths);
    setTimeout(updatePaths, 200);
}

// --- 7. SLIDE-OUT INTERACTIVE DRAWERS ---
// Drawer Candidate dataset
const talentDataset = [
    {
        name: "Ewout van Vliet",
        position: "Fractional Chief Technology Officer (CTO)",
        position_nl: "Fractional Chief Technology Officer (CTO)",
        exp: "22 years experience",
        exp_nl: "22 jaar ervaring",
        skills: ["Scale-Ups", "Architecture", "Agile Leadership", "Enterprise Infrastructure"],
        matchScore: 98,
        status: "Available immediately for Interim Placement",
        status_nl: "Direct beschikbaar voor interim plaatsing"
    },
    {
        name: "Sven Hoogland",
        position: "Interim Lead Cloud/DevOps Architect",
        position_nl: "Interim Lead Cloud/DevOps Architect",
        exp: "9 years experience",
        exp_nl: "9 jaar ervaring",
        skills: ["Terraform", "Kubernetes", "AWS Cloud Solutions", "CI/CD Automations"],
        matchScore: 95,
        status: "Available from August 2026",
        status_nl: "Beschikbaar vanaf augustus 2026"
    },
    {
        name: "Mariska de Ridder",
        position: "Regulatory Affairs Director",
        position_nl: "Regulatory Affairs Director",
        exp: "14 years experience",
        exp_nl: "14 jaar ervaring",
        skills: ["Life Sciences", "EMA Auditing", "GCP Compliance Protocols"],
        matchScore: 92,
        status: "Available for Executive Placements",
        status_nl: "Beschikbaar voor vaste executive functies"
    }
];

function initDrawers() {
    const overlay = document.getElementById("drawer-overlay");
    const talentDrawer = document.getElementById("talent-drawer");
    const salaryDrawer = document.getElementById("salary-drawer");

    const btnTalent = document.getElementById("hero-card-talent");
    const btnSalary = document.getElementById("hero-card-salary");
    const btnMatcher = document.getElementById("hero-card-matcher");

    const closeTalent = document.getElementById("close-talent-drawer");
    const closeSalary = document.getElementById("close-salary-drawer");

    // Drawer helper actions
    const openDrawer = (drawerEl) => {
        overlay.classList.add("show");
        drawerEl.classList.add("open");
        drawerEl.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // disable body scroll
    };

    const closeAllDrawers = () => {
        overlay.classList.remove("show");
        talentDrawer.classList.remove("open");
        salaryDrawer.classList.remove("open");
        talentDrawer.setAttribute("aria-hidden", "true");
        salaryDrawer.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    };

    // Card binds
    if(btnTalent) {
        btnTalent.addEventListener("click", () => {
            renderTalentDrawer();
            openDrawer(talentDrawer);
        });
    }

    if(btnSalary) {
        btnSalary.addEventListener("click", () => {
            renderSalaryChart("technology");
            openDrawer(salaryDrawer);
        });
    }

    if(btnMatcher) {
        btnMatcher.addEventListener("click", () => {
            const matcherEl = document.getElementById("ai-matcher");
            if (matcherEl) {
                matcherEl.scrollIntoView({ behavior: "smooth" });
                // Flash animation trigger
                const dropzone = document.getElementById("upload-zone");
                dropzone.style.borderColor = "var(--primary)";
                dropzone.style.backgroundColor = "rgba(var(--primary-rgb), 0.1)";
                setTimeout(() => {
                    dropzone.style.borderColor = "var(--border-color)";
                    dropzone.style.backgroundColor = "var(--bg-main)";
                }, 1500);
            }
        });
    }

    // Close actions
    closeTalent.addEventListener("click", closeAllDrawers);
    closeSalary.addEventListener("click", closeAllDrawers);
    overlay.addEventListener("click", closeAllDrawers);

    // Escape key bind
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape") closeAllDrawers();
    });

    // Salary Tabs bind
    const tabs = document.querySelectorAll(".salary-tabs .tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderSalaryChart(tab.getAttribute("data-sector"));
        });
    });
}

function renderTalentDrawer() {
    const container = document.getElementById("talent-drawer-body");
    if (!container) return;

    container.innerHTML = "";
    
    talentDataset.forEach(cand => {
        const titleText = currentLang === 'en' ? cand.position : cand.position_nl;
        const expText = currentLang === 'en' ? cand.exp : cand.exp_nl;
        const statusText = currentLang === 'en' ? cand.status : cand.status_nl;
        const contactCTA = currentLang === 'en' ? "Request Candidate Profile" : "Kandidaatprofiel Aanvragen";

        const card = document.createElement("div");
        card.className = "talent-preview-card glass-panel";
        card.innerHTML = `
            <div class="talent-card-header">
                <div>
                    <h4>${cand.name}</h4>
                    <span class="t-role">${titleText}</span>
                    <span class="t-exp">${expText}</span>
                </div>
                <span class="t-match">${cand.matchScore}% Match</span>
            </div>
            <div class="talent-skills-tags">
                ${cand.skills.map(s => `<span class="t-skill-tag">${s}</span>`).join("")}
            </div>
            <div class="talent-status-line">
                <span class="status-pulse"></span>
                <span>${statusText}</span>
            </div>
            <button class="btn btn-primary btn-sm btn-block" onclick="inquireForTalent('${cand.name}')">${contactCTA}</button>
        `;
        container.appendChild(card);
    });
}

window.inquireForTalent = (candidateName) => {
    // Close drawers
    document.getElementById("drawer-overlay").classList.remove("show");
    document.getElementById("talent-drawer").classList.remove("open");
    document.body.style.overflow = "auto";

    // Scroll and prefill
    const form = document.getElementById("contact");
    const interest = document.getElementById("contact-interest");
    const msg = document.getElementById("contact-message");
    
    if(form && interest && msg) {
        interest.value = "career-opportunity";
        msg.value = currentLang === 'en' 
            ? `Hello, I am interested in reviewing the candidate profile for: ${candidateName}.`
            : `Hallo, ik ben geïnteresseerd in het inzien van het kandidaatprofiel van: ${candidateName}.`;
        form.scrollIntoView({ behavior: "smooth" });
        msg.focus();
    }
};

// Interactive SVG charts render inside drawer
const salaryChartsData = {
    technology: [
        { label: "Lead AI Architect", min: 105000, max: 130000, dayRate: "€950 - €1200" },
        { label: "Senior Cloud Eng.", min: 85000, max: 105000, dayRate: "€800 - €950" },
        { label: "Full-Stack React Lead", min: 80000, max: 98000, dayRate: "€750 - €900" }
    ],
    finance: [
        { label: "Interim CFO / Partner", min: 140000, max: 185000, dayRate: "€1000 - €1400" },
        { label: "Risk Auditing Director", min: 110000, max: 135000, dayRate: "€900 - €1100" },
        { label: "FinTech Product Head", min: 95000, max: 120000, dayRate: "€800 - €1000" }
    ],
    energy: [
        { label: "Grid Integration Mgr.", min: 88000, max: 110000, dayRate: "€800 - €1000" },
        { label: "Offshore Asset Mgr.", min: 92000, max: 115000, dayRate: "€850 - €1050" },
        { label: "Energy Analyst Specialist", min: 78000, max: 94000, dayRate: "€700 - €850" }
    ]
};

function renderSalaryChart(sector) {
    const viewport = document.getElementById("salary-chart-viewport");
    if (!viewport) return;

    const data = salaryChartsData[sector];
    const isDark = currentTheme === "dark";

    const labelColor = isDark ? "#9CA3AF" : "#475569";
    const barBg = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.04)";
    const textColor = isDark ? "#F9FAFB" : "#0F172A";

    let html = `
        <svg viewBox="0 0 420 220" width="100%" height="auto" class="salary-svg-graph">
            <!-- Grid Lines -->
            <line x1="120" y1="10" x2="120" y2="175" stroke="${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}" stroke-width="1" />
            <line x1="260" y1="10" x2="260" y2="175" stroke="${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}" stroke-dasharray="2" />
            <line x1="400" y1="10" x2="400" y2="175" stroke="${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}" stroke-width="1" />
            
            <text x="120" y="195" font-family="Inter" font-size="9" fill="${labelColor}" text-anchor="middle">€50k</text>
            <text x="260" y="195" font-family="Inter" font-size="9" fill="${labelColor}" text-anchor="middle">€120k</text>
            <text x="400" y="195" font-family="Inter" font-size="9" fill="${labelColor}" text-anchor="middle">€190k</text>
    `;

    // Draw Bars
    data.forEach((item, idx) => {
        const yPos = 30 + idx * 52;
        
        // Compute SVG positions based on salary range (range: 50k to 190k)
        const scaleVal = (val) => 120 + ((val - 50000) / 140000) * 280;
        const xMin = scaleVal(item.min);
        const xMax = scaleVal(item.max);
        const barWidth = xMax - xMin;

        html += `
            <!-- Track bg -->
            <rect x="120" y="${yPos}" width="280" height="14" rx="3" fill="${barBg}" />
            
            <!-- Salary Range Bar -->
            <rect x="${xMin}" y="${yPos}" width="${barWidth}" height="14" rx="3" fill="url(#orange-grad)" />
            
            <!-- Labels -->
            <text x="10" y="${yPos + 10}" font-family="Outfit" font-size="10" font-weight="700" fill="${textColor}">${item.label}</text>
            <text x="${xMin + 5}" y="${yPos + 26}" font-family="Inter" font-size="8" font-weight="600" fill="${labelColor}">Min: €${Math.round(item.min/1000)}k</text>
            <text x="${xMax - 5}" y="${yPos + 26}" font-family="Inter" font-size="8" font-weight="600" fill="${labelColor}" text-anchor="end">Max: €${Math.round(item.max/1000)}k</text>
            
            <!-- Day Rate badge -->
            <text x="405" y="${yPos + 10}" font-family="Inter" font-size="8" font-weight="700" fill="#E67E22" text-anchor="start">${item.dayRate}</text>
        `;
    });

    html += `
            <defs>
                <linearGradient id="orange-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#E67E22" />
                    <stop offset="100%" stop-color="#F39C12" />
                </linearGradient>
            </defs>
        </svg>
    `;

    viewport.innerHTML = html;
}



// --- 9. JOB PORTAL SPLIT-PANE ---
function renderJobsList() {
    const container = document.getElementById("jobs-list-container");
    const countEl = document.getElementById("jobs-count");
    if (!container) return;

    let list = jobsDatabase.filter(job => {
        if(jobFilters.search) {
            const q = jobFilters.search.toLowerCase();
            const titleMatch = job.title.toLowerCase().includes(q) || job.title_nl.toLowerCase().includes(q);
            const compMatch = job.company.toLowerCase().includes(q);
            const skillMatch = job.skills.some(s => s.toLowerCase().includes(q));
            if(!titleMatch && !compMatch && !skillMatch) return false;
        }
        if(jobFilters.departments.length > 0 && !jobFilters.departments.includes(job.department)) return false;
        if(jobFilters.locations.length > 0 && !jobFilters.locations.includes(job.location)) return false;
        if(jobFilters.types.length > 0 && !jobFilters.types.includes(job.type)) return false;
        return true;
    });

    if (jobFilters.sortBy === "recent") {
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (jobFilters.sortBy === "salary-high") {
        list.sort((a, b) => b.salary - a.salary);
    } else if (jobFilters.sortBy === "salary-low") {
        list.sort((a, b) => a.salary - b.salary);
    }

    countEl.textContent = list.length;
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-jobs-found">
                <h4>${currentLang === 'en' ? 'No Positions Found' : 'Geen vacatures gevonden'}</h4>
                <p>${currentLang === 'en' ? 'Try adjusting your search criteria.' : 'Probeer uw criteria te verruimen.'}</p>
            </div>
        `;
        document.getElementById("job-detail-viewport").innerHTML = `
            <div class="detail-placeholder">
                <div class="placeholder-icon">📋</div>
                <h3>${translations[currentLang].select_job_placeholder_h}</h3>
                <p>${translations[currentLang].select_job_placeholder_t}</p>
            </div>
        `;
        return;
    }

    list.forEach(job => {
        const titleText = currentLang === 'en' ? job.title : job.title_nl;
        const card = document.createElement("div");
        card.className = "job-card" + (selectedJobId === job.id ? " active" : "");
        card.setAttribute("data-id", job.id);
        card.innerHTML = `
            <div class="job-card-details">
                <div class="job-meta-tags">
                    <span class="job-tag tag-dept">${translations[currentLang]["dept_" + job.department] || job.department}</span>
                    <span class="job-tag tag-loc">${job.location.charAt(0).toUpperCase() + job.location.slice(1)}</span>
                    <span class="job-tag tag-type">${translations[currentLang]["type_" + job.type] || job.type}</span>
                </div>
                <h4 class="job-title">${titleText}</h4>
                <p class="job-salary-est"><strong>${job.company}</strong> &bull; ${job.salaryDisplay}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            document.querySelectorAll(".job-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            selectedJobId = job.id;
            renderJobDetail(job.id);

            if (window.innerWidth < 1200) {
                document.getElementById("sticky-detail-pane").scrollIntoView({ behavior: "smooth" });
            }
        });

        container.appendChild(card);
    });

    const currentSelectedValid = list.some(j => j.id === selectedJobId);
    if (!currentSelectedValid) {
        selectedJobId = list[0].id;
    }

    renderJobDetail(selectedJobId);
    const cards = container.querySelectorAll(".job-card");
    cards.forEach(c => {
        if(c.getAttribute("data-id") === selectedJobId) {
            c.classList.add("active");
        }
    });
}

function renderJobDetail(jobId) {
    const detailContainer = document.getElementById("job-detail-viewport");
    if (!detailContainer) return;

    const job = jobsDatabase.find(j => j.id === jobId);
    if (!job) {
        detailContainer.innerHTML = `
            <div class="detail-placeholder">
                <div class="placeholder-icon">📋</div>
                <h3>${translations[currentLang].select_job_placeholder_h}</h3>
                <p>${translations[currentLang].select_job_placeholder_t}</p>
            </div>
        `;
        return;
    }

    const titleText = currentLang === 'en' ? job.title : job.title_nl;
    const descText = currentLang === 'en' ? job.description : job.description_nl;
    const reqs = currentLang === 'en' ? job.requirements : job.requirements_nl;
    const bens = currentLang === 'en' ? job.benefits : job.benefits_nl;
    const dict = translations[currentLang];
    
    // Stable simulated match score between 91% and 98%
    const matchScore = 91 + (job.id.charCodeAt(job.id.length - 1) % 8);

    detailContainer.innerHTML = `
        <div class="job-detail-content-wrapper">
            <div class="detail-header">
                <div class="detail-header-main">
                    <div class="job-meta-tags">
                        <span class="job-tag tag-dept">${dict["dept_" + job.department] || job.department}</span>
                        <span class="job-tag tag-loc">${job.location.charAt(0).toUpperCase() + job.location.slice(1)}</span>
                        <span class="job-tag tag-type">${dict["type_" + job.type] || job.type}</span>
                    </div>
                    <h3 class="job-title">${titleText}</h3>
                    <p class="job-salary-est"><strong>${job.company}</strong> &bull; ${job.salaryDisplay}</p>
                </div>
                <div class="job-compatibility-badge">
                    <span class="compatibility-label">${dict.match_score_lbl}</span>
                    <span class="compatibility-value">${matchScore}%</span>
                </div>
            </div>
            <div class="detail-body">
                <div class="detail-section">
                    <p>${descText}</p>
                </div>
                
                <div class="detail-section">
                    <h5>${dict.skills_required}</h5>
                    <div class="detail-skills-cloud">
                        ${job.skills.map(s => `<span class="detail-skill-badge">${s}</span>`).join("")}
                    </div>
                </div>

                <div class="detail-section">
                    <h5>${dict.job_req_head}</h5>
                    <ul class="detail-list">
                        ${reqs.map(r => `<li>${r}</li>`).join("")}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h5>${dict.job_ben_head}</h5>
                    <ul class="detail-list">
                        ${bens.map(b => `<li>${b}</li>`).join("")}
                    </ul>
                </div>
            </div>
            <div class="detail-actions">
                <a href="#contact" class="btn btn-primary btn-sm" onclick="prefillContactForm('${job.id}')">${dict.quick_apply}</a>
            </div>
        </div>
    `;
}

// Prefills contact interest based on job clicks
window.prefillContactForm = (jobId) => {
    const job = jobsDatabase.find(j => j.id === jobId);
    if (!job) return;

    const interestSelect = document.getElementById("contact-interest");
    const messageArea = document.getElementById("contact-message");
    
    if (interestSelect && messageArea) {
        interestSelect.value = "career-opportunity";
        const text = currentLang === 'en' 
            ? `Hello, I would like to apply for the position of: ${job.title} at ${job.company}. Please review my details.`
            : `Hallo, ik wil graag solliciteren naar de functie van: ${job.title_nl} bij ${job.company}.`;
        messageArea.value = text;
    }
};

// Prefills and focuses the AI Matcher
window.bindJobToAIMatcher = (jobId) => {
    const job = jobsDatabase.find(j => j.id === jobId);
    if (!job) return;

    const aiText = document.getElementById("ai-skills-text");
    const matcherSection = document.getElementById("ai-matcher");
    
    if (aiText && matcherSection) {
        const text = currentLang === 'en'
            ? `Matching for: ${job.title}. Enter your skills to check compatibility...`
            : `Matching voor: ${job.title_nl}. Voer uw vaardigheden in om te controleren...`;
        aiText.value = "";
        aiText.placeholder = text;
        matcherSection.scrollIntoView({ behavior: "smooth" });
        aiText.focus();
    }
};

// --- 10. AI MATCHER ENGINE ACTIONS ---
function initAIMatcher() {
    const form = document.getElementById("ai-match-form");
    if (!form) return;

    const dropzone = document.getElementById("upload-zone");
    const fileInput = document.getElementById("resume-file-input");
    const selectBtn = document.getElementById("select-file-btn");
    const fileNameEl = document.getElementById("file-name-indicator");

    const idlePanel = document.getElementById("analytics-idle");
    const scanningPanel = document.getElementById("analytics-scanning");
    const resultsPanel = document.getElementById("analytics-results");

    let uploadedFile = null;

    selectBtn.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (e) => {
        if(e.target.files.length > 0) {
            uploadedFile = e.target.files[0];
            fileNameEl.textContent = `📄 ${uploadedFile.name}`;
        }
    });

    dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        if (e.dataTransfer.files.length > 0) {
            uploadedFile = e.dataTransfer.files[0];
            fileNameEl.textContent = `📄 ${uploadedFile.name}`;
            fileInput.files = e.dataTransfer.files;
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const textInput = document.getElementById("ai-skills-text").value.trim();
        
        if (!uploadedFile && !textInput) {
            alert(currentLang === 'en' ? "Please upload a resume or paste your skills." : "Upload een cv of plak uw vaardigheden.");
            return;
        }

        idlePanel.style.display = "none";
        resultsPanel.style.display = "none";
        scanningPanel.style.display = "flex";

        setTimeout(() => {
            scanningPanel.style.display = "none";
            resultsPanel.style.display = "block";
            computeAIMatch(uploadedFile, textInput);
        }, 2200);
    });
}

function computeAIMatch(file, text) {
    const rawContent = (text + " " + (file ? file.name : "")).toLowerCase();
    
    const competenciesList = [
        { key: "react", label: "React" },
        { key: "node", label: "Node.js" },
        { key: "javascript", label: "JavaScript" },
        { key: "python", label: "Python" },
        { key: "pytorch", label: "PyTorch" },
        { key: "aws", label: "AWS" },
        { key: "kubernetes", label: "Kubernetes" },
        { key: "docker", label: "Docker" },
        { key: "cloud", label: "Cloud Systems" },
        { key: "cfo", label: "CFO" },
        { key: "finance", label: "Corporate Finance" },
        { key: "merger", label: "Merger Operations" },
        { key: "energy", label: "Energy Grid" },
        { key: "pharma", label: "Pharma Compliance" }
    ];

    const detectedSkills = [];
    competenciesList.forEach(skill => {
        if(rawContent.includes(skill.key)) {
            detectedSkills.push(skill.label);
        }
    });

    if(detectedSkills.length === 0) {
        detectedSkills.push("Enterprise Operations", "Agile Management");
    }

    const matchedJobs = [];
    jobsDatabase.forEach(job => {
        let matchingSkillsCount = 0;
        job.skills.forEach(s => {
            if(rawContent.includes(s.toLowerCase()) || detectedSkills.some(ds => ds.toLowerCase().includes(s.toLowerCase()))) {
                matchingSkillsCount++;
            }
        });

        let score = 42; // baseline
        if (matchingSkillsCount > 0) {
            score += Math.min(matchingSkillsCount * 18, 52);
        }
        
        score += Math.floor(Math.random() * 4);
        score = Math.min(score, 99);

        matchedJobs.push({ job: job, score: score });
    });

    matchedJobs.sort((a, b) => b.score - a.score);

    const scoreTextEl = document.getElementById("ai-score-text");
    const chartStroke = document.getElementById("ai-chart-stroke");
    const tagsContainer = document.getElementById("identified-skills-tags");
    const miniCardsContainer = document.getElementById("matched-jobs-mini-container");

    const averageScore = Math.round(matchedJobs[0].score);
    
    scoreTextEl.textContent = `${averageScore}%`;
    chartStroke.style.strokeDasharray = `${averageScore}, 100`;

    tagsContainer.innerHTML = "";
    detectedSkills.forEach(tag => {
        const span = document.createElement("span");
        span.className = "skill-tag-id";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    miniCardsContainer.innerHTML = "";
    const topMatches = matchedJobs.slice(0, 2);
    
    if (averageScore < 45) {
        miniCardsContainer.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">${translations[currentLang].no_matching_jobs}</p>`;
        return;
    }

    topMatches.forEach(match => {
        const jTitle = currentLang === 'en' ? match.job.title : match.job.title_nl;
        const card = document.createElement("div");
        card.className = "matched-job-mini-card";
        card.innerHTML = `
            <div class="mini-card-details">
                <h5>${jTitle}</h5>
                <span>${match.job.company} &bull; ${match.job.location.charAt(0).toUpperCase() + match.job.location.slice(1)}</span>
            </div>
            <span class="mini-card-score">${match.score}% match</span>
        `;
        miniCardsContainer.appendChild(card);
    });
}

// --- 11. MAPS INTEGRATION ---
let map = null;
let mapTileLayer = null;

function initMap() {
    const mapContainer = document.getElementById("contact-map");
    if (!mapContainer) return;

    const amsterdamCoords = [52.3719, 4.8845];

    map = L.map('contact-map', {
        center: amsterdamCoords,
        zoom: 14,
        scrollWheelZoom: false
    });

    const tileUrl = currentTheme === "dark" 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    mapTileLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(map);

    const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="width:24px; height:24px; background-color:#E67E22; border: 3px solid white; border-radius:50%; box-shadow: 0 0 10px rgba(0,0,0,0.3); animation: pulse 1.5s infinite;"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    L.marker(amsterdamCoords, { icon: customIcon }).addTo(map)
        .bindPopup(`<strong style="font-family:'Outfit';">Brainbox Staffing HQ</strong><br>Keizersgracht 241, Amsterdam`)
        .openPopup();
}

function updateMapTiles() {
    if (!map || !mapTileLayer) return;

    const newUrl = currentTheme === "dark"
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    mapTileLayer.setUrl(newUrl);
}

// --- 12. CONTACT FORM ---
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    const successBanner = document.getElementById("form-success-banner");

    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameVal = document.getElementById("contact-name").value.trim();
        const emailVal = document.getElementById("contact-email").value.trim();
        const msgVal = document.getElementById("contact-message").value.trim();
        const gdprCheck = document.getElementById("contact-gdpr").checked;

        if(!nameVal || !emailVal || !msgVal || !gdprCheck) {
            alert(currentLang === 'en' ? "Please complete all fields and accept GDPR privacy policies." : "Vul alle verplichte velden in en accepteer de GDPR.");
            return;
        }

        contactForm.style.display = "none";
        successBanner.style.display = "flex";

        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = "block";
            successBanner.style.display = "none";
        }, 10000);
    });

    const newsletterForm = document.getElementById("footer-newsletter-form");
    if(newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(currentLang === 'en' ? "Subscribed successfully! Thank you." : "Succesvol ingeschreven! Hartelijk dank.");
            newsletterForm.reset();
        });
    }
}

// --- 13. ADDITIONAL INTERACTIVE FEATURES ---



function initIndustryCards() {
    const tabs = document.querySelectorAll(".industry-tab");
    const panels = document.querySelectorAll(".industry-panel");
    
    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) return;
            
            // Deactivate current tab & panel
            tabs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            panels.forEach(p => p.classList.remove("active"));
            
            // Activate target tab & panel
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            
            const targetInd = tab.getAttribute("data-industry");
            const targetPanel = document.getElementById(`panel-${targetInd}`);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
}

function initCarousel() {
    // Graceful placeholder for Success Stories carousel or testimonials if needed.
    const container = document.querySelector(".carousel-container");
    if (!container) return;
}

function initJobPortal() {
    // Initial render of jobs list
    renderJobsList();

    // Set up search input listener
    const searchInput = document.getElementById("sidebar-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            jobFilters.search = e.target.value.trim();
            renderJobsList();
        });
    }

    // Set up sorting dropdown listener
    const sortSelect = document.getElementById("sort-jobs");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            jobFilters.sortBy = e.target.value;
            renderJobsList();
        });
    }

    // Set up checkbox listeners for departments, locations, and types
    const checkboxes = document.querySelectorAll("#collapsible-filters-box input[type='checkbox']");
    checkboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            const filterName = cb.name; // "department", "location", or "type"
            const filterValue = cb.value;

            let filterArray;
            if (filterName === "department") filterArray = jobFilters.departments;
            else if (filterName === "location") filterArray = jobFilters.locations;
            else if (filterName === "type") filterArray = jobFilters.types;

            if (filterArray) {
                if (cb.checked) {
                    if (!filterArray.includes(filterValue)) {
                        filterArray.push(filterValue);
                    }
                } else {
                    const idx = filterArray.indexOf(filterValue);
                    if (idx > -1) {
                        filterArray.splice(idx, 1);
                    }
                }
                renderJobsList();
            }
        });
    });

    // Clear filters button listener
    const clearBtn = document.getElementById("clear-filters-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            jobFilters.search = "";
            jobFilters.departments = [];
            jobFilters.locations = [];
            jobFilters.types = [];
            jobFilters.sortBy = "recent";

            if (searchInput) searchInput.value = "";
            if (sortSelect) sortSelect.value = "recent";
            checkboxes.forEach(cb => cb.checked = false);

            renderJobsList();
        });
    }
}

function initFilterCollapsible() {
    const trigger = document.getElementById("mobile-filter-trigger");
    const box = document.getElementById("collapsible-filters-box");
    if (!trigger || !box) return;

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        box.classList.toggle("show");
    });

    // Click outside to close the filters box
    document.addEventListener("click", (e) => {
        if (!box.contains(e.target) && e.target !== trigger) {
            box.classList.remove("show");
        }
    });
}

function initAIMatcherCanvas() {
    const canvas = document.getElementById("ai-matcher-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });

    const points = [];
    const pointCount = 90;
    const connections = [];

    for (let i = 0; i < pointCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        
        const r = 50 + Math.random() * 20;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        points.push({
            x, y, z,
            r: Math.random() * 1.5 + 0.8,
            pulseSpeed: 0.02 + Math.random() * 0.03,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dz = points[i].z - points[j].z;
            const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if (d < 30) {
                connections.push({ from: i, to: j });
            }
        }
    }

    let rotY = 0;
    let rotX = 0;
    let targetRotY = 0.005;
    let targetRotX = 0.003;

    const parentContainer = canvas.closest(".matcher-analytics-side");
    if (parentContainer) {
        parentContainer.addEventListener("mousemove", (e) => {
            const rect = parentContainer.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const pctX = (mouseX - rect.width/2) / (rect.width/2);
            const pctY = (mouseY - rect.height/2) / (rect.height/2);
            
            targetRotY = pctX * 0.03;
            targetRotX = pctY * 0.02;
        });

        parentContainer.addEventListener("mouseleave", () => {
            targetRotY = 0.005;
            targetRotX = 0.003;
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        rotY += (targetRotY - rotY) * 0.05;
        rotX += (targetRotX - rotX) * 0.05;

        const currentRotY = rotY + 0.006;
        const currentRotX = rotX + 0.002;

        const cosY = Math.cos(currentRotY);
        const sinY = Math.sin(currentRotY);
        const cosX = Math.cos(currentRotX);
        const sinX = Math.sin(currentRotX);

        const centerX = width / 2;
        const centerY = height / 2;

        const projected = points.map((p, idx) => {
            let x1 = p.x * cosY - p.z * sinY;
            let z1 = p.x * sinY + p.z * cosY;

            let y2 = p.y * cosX - z1 * sinX;
            let z2 = p.y * sinX + z1 * cosX;

            const scale = 220 / (220 + z2);
            const x2d = centerX + x1 * scale;
            const y2d = centerY + y2 * scale;

            p.pulsePhase += p.pulseSpeed;
            const pulse = 1.0 + 0.3 * Math.sin(p.pulsePhase);

            return {
                x2d, y2d,
                depth: z2,
                radius: p.r * scale * pulse,
                opacity: Math.max(0.1, (z2 + 100) / 200)
            };
        });

        connections.forEach(c => {
            const p1 = projected[c.from];
            const p2 = projected[c.to];
            
            const avgDepth = (p1.depth + p2.depth) / 2;
            const depthOpacity = Math.max(0.05, (avgDepth + 100) / 200);

            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            
            ctx.strokeStyle = `rgba(230, 126, 34, ${0.08 * depthOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
        });

        projected.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x2d, p.y2d, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 126, 34, ${0.4 * p.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function initLeadershipAccordion() {
    const accordion = document.querySelector(".team-accordion");
    if (!accordion) return;
    
    const items = document.querySelectorAll(".team-accordion-item");
    const panels = document.querySelectorAll(".team-details-panel");
    
    if (!items.length || !panels.length) return;
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    function updateActiveMember(index) {
        currentIndex = index;
        
        // Remove active class from all items and add to current
        items.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
        
        // Update active details panel
        panels.forEach((panel, idx) => {
            if (idx === index) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    }
    
    // Setup click and keydown handlers
    items.forEach((item, idx) => {
        item.addEventListener("click", () => {
            updateActiveMember(idx);
        });
        
        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                updateActiveMember(idx);
            }
        });
    });
    
    // Auto-rotation (cycles through active states, pauses on hover)
    let autoRotateInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        updateActiveMember(nextIndex);
    }, 5000);
    
    accordion.addEventListener("mouseenter", () => {
        clearInterval(autoRotateInterval);
    });
    
    accordion.addEventListener("mouseleave", () => {
        autoRotateInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % totalItems;
            updateActiveMember(nextIndex);
        }, 5000);
    });
    
    // Initialize
    updateActiveMember(0);
}



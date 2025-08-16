import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Twitter, ChevronDown, ChevronUp, Globe, Users, Shield, Target, Activity, Heart, Star, Circle, Award, Handshake, Lightbulb } from "lucide-react";
import { useState } from "react";
import founderImage from "@/assets/foundeerpic.jpg";
import founderImage1 from "@/assets/RahelBirhanu.jpg";
import founderImage2 from "@/assets/AberaWondemu.png";
import founderImage3 from "@/assets/Sisay sfay.png";
import founderImage4 from "@/assets/Zelalem .jpg";
import founderImage5 from "@/assets/TsedalEndrias.jpg";
import founderImage6 from "@/assets/TsionBerga.jpg";
import founderImage7 from "@/assets/emaos.jpg";
import founderImage8 from "@/assets/wub.jpg";

const FounderBio = ({ bio }: { bio: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedBio = bio.slice(0, 400) + "...";
  
  return (
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground leading-relaxed">
        {isExpanded ? bio : truncatedBio}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center text-primary hover:text-primary-light transition-colors font-medium"
      >
        {isExpanded ? (
          <>
            Read Less
            <ChevronUp className="w-4 h-4 ml-1" />
          </>
        ) : (
          <>
            Read More
            <ChevronDown className="w-4 h-4 ml-1" />
          </>
        )}
      </button>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Wholeness",
      description: "In working with children, every aspect of their growth & development must be addressed, including their physical and psychological wellbeing."
    },
    {
      icon: Handshake,
      title: "Inclusion and Equity",
      description: "Ensuring that every individual regardless of gender, age, disability, ethnicity, social status, or background has fair access to resources and opportunities."
    },
    {
      icon: Shield,
      title: "Integrity and Accountability",
      description: "Acting with honesty, ethics, and transparency in all activities and decisions while being responsible for our actions and using resources appropriately."
    },
    {
      icon: Users,
      title: "Participation",
      description: "Actively involving community members, especially beneficiaries, in planning, decision-making, and implementation of development initiatives."
    },
    {
      icon: Award,
      title: "Respect and Dignity",
      description: "Treating all people with fairness, empathy, and appreciation for their humanity while recognizing and honouring cultural diversity."
    },
    {
      icon: Lightbulb,
      title: "Resilience and Empowerment",
      description: "Building people's capacity to overcome challenges and lead independent, fulfilling lives through knowledge, skills, and confidence building."
    }
  ];

  const founder = {
    name: "Yewoinshet Masresha",
    role: "Founder & Visionary Leader",
    bio: "Yewoinshet Masresha, the visionary founder of Hope for Children Organization (HFCO), is a woman whose life has been shaped by compassion, courage, and a deep love for humanity. Born in Babile, a town nestled between Jigjiga and Harar in Ethiopia's Harari region, Yewoinshet grew up with a natural sense of empathy and a passion for helping those in need. From a young age, she demonstrated critical thinking, an unwavering sense of justice, and an unshakable commitment to the well-being of others.\n\nShe pursued her undergraduate studies in Literature at Addis Ababa University, and later earned a Master's degree in Social Psychology. Her academic journey strengthened her understanding of human behavior and deepened her resolve to serve the most vulnerable members of society. Before founding HFCO, Yewoinshet worked with a Catholic missionary charity as a social worker, where she provided care and support to disadvantaged individuals and families.\n\nIn the early 2000s, Ethiopia was among the countries hardest hit by the HIV/AIDS epidemic, a crisis that not only caused widespread loss of life but also left thousands of children orphaned and stigmatized. Witnessing the despair faced by affected families, Yewoinshet was moved to act. With grace, courage, and determination, she began offering home-based care services to bedridden HIV/AIDS patients bringing comfort, dignity, and hope into their lives.\n\nStarting with just one group home sheltering eight children, she envisioned a new kind of family one built not by blood, but by love, commitment, and care. Each group home was led by a dedicated mother caring for 8–10 children as her own. Over time, this heartfelt initiative grew to 12 group homes, nurturing 130 children in a safe and loving environment. Through HFCO, Yewoinshet created not just shelters, but homes filled with hope and healing.\n\nFor more than 18 years, she served HFCO in multiple roles volunteer, psychologist, project manager, and executive director often sacrificing her personal interests and comfort to ensure the organization's success. Though she now resides in Australia for retirement due to her service for long years, Yewoinshet continues to guide HFCO's strategic direction and supports the organization through personal donations and mentorship.\n\nTo this day, the lives of over 130 children she raised through HFCO stand as a living testament to her compassion. Many have grown into independent, accomplished individuals holding key positions in society. Her legacy lives on through the hearts she's touched, the lives she's transformed, and the enduring family she built through love.",
    image: founderImage,
    email: "founder@hfc.org",
    linkedin: "#",
    twitter: "#"
  };

  const boardMembers = [
    {
      name: "Rahel Berhanu Tesfa",
      role: "HFC Board of Director Chairperson ",
      expertise: "Multidisciplinary Human Rights Leader",
      image: founderImage1
    },
    {
      name: "Aberra Wondimu",
      role: "Vice Chairperson Board of Directors",
      expertise: "Humanitarian Development Leader",
      image: founderImage2
    },
    {
      name: "Zelalem Mamuye ",
      role: " Executive Director",
      expertise: "Executive Director & Development Management Specialist",
      image: founderImage4
    },
    {
      name: "Tsedale Endrias",
      role: "Vice Manager  & Sponsorship and Group Home Project oordinator  ",
      expertise: "Community Health and Social Work Leader",
      image: founderImage5
    },
    {
      name: "Tsion Berga",
      role: "Finance Manage",
      expertise: "Finance Manager & Accounting Expert",
      image: founderImage6
    },
    {
      name: "Sisay Tesfaye",
      role: "Board Member ",
      expertise: "Psychosocial Support & Educational Leadership Expert",
      image: founderImage3
    },
    {
      name: "Emaos Linigerh ",
      role: "Project Coordinator & Communication Advisor",
      expertise: "Development Communication Specialist",
      image: founderImage7
    },
    {
      name: "Wubtaye Getachew  ",
      role: "Harar Branch Office Coordinator & Management Team Member",
      expertise: "Social Accountability and Leadership Specialist",
      image: founderImage8
    }
  ];

  const staff = [
    {
      name: "Rahel Berhanu Tesfa",
      role: "Board Chairperson",
      department: "Board of Directors",
      location: "Addis Ababa, Ethiopia",
      email: "rahel.berhanu@hfc.org"
    },
    {
      name: "Meron Wonde",
      role: "Board Member",
      department: "Board of Directors",
      location: "Addis Ababa, Ethiopia",
      email: "meron.wonde@hfc.org"
    },
    {
      name: "Aberra Wondimu",
      role: "Vice Chairperson",
      department: "Board of Directors",
      location: "Addis Ababa, Ethiopia",
      email: "aberra.wondimu@hfc.org"
    },
    {
      name: "Zelalem Mamuye",
      role: "Executive Director",
      department: "Leadership",
      location: "Addis Ababa, Ethiopia",
      email: "zelalem.mamuye@hfc.org"
    },
    {
      name: "Tsedale Endrias",
      role: "Vice Manager & Sponsorship and Group Home Project Coordinator",
      department: "Program Management",
      location: "Addis Ababa, Ethiopia",
      email: "tsedale.endrias@hfc.org"
    },
    {
      name: "Tsion Berga",
      role: "Finance Manager",
      department: "Finance",
      location: "Addis Ababa, Ethiopia",
      email: "tsion.berga@hfc.org"
    },
    {
      name: "Sisay Tesfaye",
      role: "Board Member",
      department: "Psychosocial Support & Education",
      location: "Addis Ababa, Ethiopia",
      email: "sisay.tesfaye@hfc.org"
    },
    {
      name: "Emaos Lingerh",
      role: "Project Coordinator & Communication Advisor",
      department: "Communications & Development",
      location: "Addis Ababa, Ethiopia",
      email: "emaos.lingerh@hfc.org"
    },
    {
      name: "Wubtaye Getachew",
      role: "Harar Branch Office Coordinator & Management Team Member",
      department: "Branch Management",
      location: "Harar, Ethiopia",
      email: "wubtaye.getachew@hfc.org"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Hope for Children Organization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A country where every individual lives in a joyful and healthy environment within a transparent and just society
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Hope for Children Organization (HFC) is an indigenous, non-political, non-faith-based 
                  local NGO, established in November 2000 in Ethiopia with the key objectives of sustainable 
                  and comprehensive community based care and support for children and families affected by HIV/AIDS.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The organization has 25 years' experience on OVC addressing their education, health and care 
                  and support aspects. In relation to this, HFC has managed to reach about 27,000 OVC and more 
                  than 10,000 PLWHA through mobilizing 450 volunteer service providers.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently, HFC provides holistic support to HIV-AIDS infected and affected children including 
                  residential care, psychosocial services, educational support, and community mobilization. 
                  We have active projects in Addis Ababa City Administration, Oromia and Harari regional states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-primary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    HFCO has a mission, dedicated to fostering the development of highly vulnerable 
                    Community members, children, women, youth, and their caregivers, empowering them 
                    to become empowered, self-sufficient and responsible members of their communities 
                    through a participatory and holistic approach.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-accent">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "A country where every individual lives in a joyful and healthy environment 
                    within a transparent and just society"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Founder</h2>
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                      <div className="aspect-square w-full max-w-md mx-auto">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover rounded-lg shadow-medium"
                        />
                      </div>
                      <div className="flex justify-center space-x-4">
                        <a href={`mailto:${founder.email}`} className="text-primary hover:text-primary-light">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={founder.linkedin} className="text-primary hover:text-primary-light">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={founder.twitter} className="text-primary hover:text-primary-light">
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 text-foreground">{founder.name}</h3>
                        <Badge variant="secondary" className="mb-4">{founder.role}</Badge>
                      </div>
                      <FounderBio bio={founder.bio} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Board of Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {boardMembers.slice(0, 3).map((member, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-soft"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                    <Badge variant="outline" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Management Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.slice(3).map((member, index) => (
                <Card key={index + 3} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-soft"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                    <Badge variant="outline" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Staff</h2>
            <div className="max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-lg shadow-medium">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((member, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{member.name}</td>
                        <td className="px-6 py-4 text-muted-foreground">{member.role}</td>
                        <td className="px-6 py-4">
                          <Badge variant="outline">{member.department}</Badge>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{member.location}</td>
                        <td className="px-6 py-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Join Our Team</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Are you passionate about humanitarian work and creating positive change? 
              We're always looking for dedicated individuals to join our mission.
            </p>
            <a 
              href="mailto:careers@hfc.org" 
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              View Open Positions
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

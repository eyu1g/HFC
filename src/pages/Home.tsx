import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target, ArrowRight, CheckCircle, Baby, Building2, Shield, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useState, useEffect } from "react";

const Typewriter = ({ words, delay = 100, deleteDelay = 1000, loopDelay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    } else {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, deleteDelay);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, delay, deleteDelay]);

  return (
    <span className="inline-block min-h-[1.2em]" style={{ color: '#F2AA77' }}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home = () => {
  const stats = [
    { number: "37,000+", label: "OVC & PLWHA Reached" },
    { number: "25", label: "Years of Service" },
    { number: "450", label: "Volunteer Providers" },
    { number: "34", label: "CSOs Strengthened" },
  ];

  const focusAreas = [
    {
      icon: Baby,
      title: "Child & Youth Development",
      description: "Comprehensive support for orphans and vulnerable children including health, education and nutrition."
    },
    {
      icon: Building2,
      title: "Community Empowerment",
      description: "Building livelihoods and strengthening community capacity for sustainable development."
    },
    {
      icon: Shield,
      title: "Good Governance & Human Rights",
      description: "Promoting transparency, accountability, and civic engagement in communities."
    },
    {
      icon: Stethoscope,
      title: "HIV/AIDS Prevention & Care",
      description: "Comprehensive HIV/AIDS prevention, care and support programs for affected communities."
    }
  ];

  const achievements = [
    "Reached over 27,000 orphans and vulnerable children",
    "Supported more than 10,000 people living with HIV/AIDS",
    "Mobilized 450 volunteer service providers",
    "Operated 12 group homes caring for 130 children"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="block animate-fade-in-up">
              <Typewriter 
                words={[
                  "Creating Hope,",
                  "Changing Lives",
                  "Building Futures",
                  "Empowering Communities",
                  "Transforming Lives"
                ]} 
                delay={150}
                deleteDelay={2000}
              />
            </div>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in-up animation-delay-600">
            Join us in our mission to build stronger communities through sustainable 
            development, education, and humanitarian aid across the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Donate Now
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Our Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              HFCO is dedicated to fostering the development of highly vulnerable community members, 
              children, women, youth, and their caregivers, empowering them to become self-sufficient 
              and responsible members of their communities through a participatory and holistic approach.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all transform hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F2AA77' }}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-accent/10">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-foreground">
            Join Our Mission
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
            Every contribution, no matter the size, helps us create lasting change. 
            Together, we can build a better world for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Donate Today
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
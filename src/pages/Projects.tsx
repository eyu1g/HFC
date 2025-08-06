import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Target } from "lucide-react";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Sponsorship for Children Foster Care",
      description: "Supporting orphans and vulnerable children through distance adoption and sponsorship programs, addressing their education, health, and psychosocial support needs while they remain with their caregivers.",
      location: "Addis Ababa, Oromia, and Harari Regional States",
      startDate: "2000",
      endDate: "Ongoing",
      beneficiaries: "Over 27,000 OVC reached",
      progress: 85,
      budget: "Multiple funding sources",
      status: "In Progress",
      category: "Child Development"
    },
    {
      title: "Group Home Program",
      description: "Operating 12 family-style group homes where dedicated mothers care for 8-10 children each, creating loving families built by commitment and care rather than blood. Currently nurturing 130 children in safe, supportive environments.",
      location: "Addis Ababa & Surrounding Areas",
      startDate: "Early 2000s",
      endDate: "Ongoing",
      beneficiaries: "130 children in 12 group homes",
      progress: 90,
      budget: "Sustained through multiple donors",
      status: "In Progress",
      category: "Child Development"
    },
    {
      title: "Youth Learning Center",
      description: "Providing comprehensive youth enrichment services including vocational training, educational support, and capacity building to empower young people toward self-reliance and community leadership.",
      location: "Addis Ababa",
      startDate: "2020",
      endDate: "Ongoing",
      beneficiaries: "Youth and young adults",
      progress: 70,
      budget: "International and local partnerships",
      status: "In Progress",
      category: "Education"
    },
    {
      title: "Urban Productive Safety Net and Job Project",
      description: "Addressing the needs of street adults, children, and women with children through productive safety net programs, job creation, and comprehensive support services in urban settings.",
      location: "Urban Areas - Addis Ababa",
      startDate: "2020",
      endDate: "Ongoing",
      beneficiaries: "Street adults, children, and women with children",
      progress: 45,
      budget: "Government and partner funding",
      status: "In Progress",
      category: "Economic Development"
    },
    {
      title: "Empowering Communities through Inclusive Social and Behavior Change Interventions",
      description: "Implementing community mobilization and facilitation programs that promote positive social and behavioral changes, strengthening community responses to various challenges including HIV/AIDS.",
      location: "Various Communities across Ethiopia",
      startDate: "2020",
      endDate: "Ongoing",
      beneficiaries: "Multiple communities",
      progress: 30,
      budget: "Multiple funding sources",
      status: "In Progress",
      category: "Community Development"
    }
  ];

  const completedProjects = [
    {
      title: "Ethiopian Social Accountability Project (ESAP2, ESAP3)",
      description: "World Bank funded project where HFCO served as lead organization coordinating implementing partners, facilitating social accountability interventions in western, southern, and eastern parts of the country across 22 targeted woredas.",
      location: "22 Woredas across Multiple Regions, Ethiopia",
      completedDate: "Ongoing since 2013",
      beneficiaries: "Communities in 22 woredas",
      budget: "World Bank funding",
      impact: "Strengthened transparency, accountability, and citizen participation in governance and public service delivery",
      category: "Governance"
    },
    {
      title: "Ethiopian Civic Engagement (ECE)",
      description: "Enhanced civic participation and democratic governance through capacity building and community engagement initiatives.",
      location: "Various Regions, Ethiopia",
      completedDate: "September 2021",
      beneficiaries: "3,000",
      budget: "$300,000",
      impact: "Increased civic awareness and participation in democratic processes",
      category: "Governance"
    },
    {
      title: "Civil Society Support Program (CSSP2)",
      description: "Implemented gender responsive budgeting initiatives to strengthen civil society organizations and enhance their capacity for effective programming and advocacy.",
      location: "National, Ethiopia",
      completedDate: "2020",
      beneficiaries: "Civil society organizations",
      budget: "International donor support",
      impact: "Enhanced organizational capacity and gender-responsive programming among CSOs",
      category: "Governance"
    },
    {
      title: "Integrated Community Based HIV/AIDS Preventive, Care and Support",
      description: "USAID/Ethiopia funded project implemented in 9 towns (October 2013-September 2016), providing comprehensive HIV/AIDS prevention, care, and support services with economic strengthening through VSLA trainings.",
      location: "9 Towns across Ethiopia",
      completedDate: "September 2016",
      beneficiaries: "18,000 people (9,000 care/support + 9,000 economic strengthening)",
      budget: "USAID funding",
      impact: "Comprehensive HIV/AIDS response with integrated economic empowerment reaching 18,000 people",
      category: "Healthcare"
    },
    {
      title: "Village Saving and Loan (VSLA)",
      description: "8-year partnership with Plan International Ethiopia (November 2007-June 2015) promoting village savings and loan associations as asset building potential for poor households, reaching communities in Addis Ababa and Oromia.",
      location: "Addis Ababa and Oromia Regional State",
      completedDate: "June 2015",
      beneficiaries: "34,000 poor families (22,000 in Addis Ababa + 12,000 in Oromia)",
      budget: "Plan International Ethiopia partnership",
      impact: "Established sustainable community-based financial systems and improved household economic resilience for 34,000 families",
      category: "Economic Development"
    },
    {
      title: "Girls Empowerment Project",
      description: "Promoted girls' education, protection, and empowerment through comprehensive support programs.",
      location: "Various Regions, Ethiopia",
      completedDate: "August 2017",
      beneficiaries: "800",
      budget: "$150,000",
      impact: "Increased girls' school enrollment and completion rates while reducing harmful practices",
      category: "Education"
    },
    {
      title: "SCRHA/PATH Project",
      description: "Strengthening Communities Response to HIV/AIDS project focusing on community and home-based palliative care, economic strengthening, and civil society organization capacity building across Oromia and Amhara regions.",
      location: "47 Towns in Oromia and Amhara Regions",
      completedDate: "2016",
      beneficiaries: "86,871 PLHIV affected individuals + 34 CSOs capacity building",
      budget: "SCRHA/PATH funding",
      impact: "Enhanced community response to HIV/AIDS with strengthened CSO capacity and improved care for 86,871 people living with HIV",
      category: "Healthcare"
    },
    {
      title: "Home Based Care for HIV/AIDS Patients",
      description: "Foundational program providing dignified home-based care services for bedridden HIV/AIDS patients, bringing comfort, dignity, and hope to affected families during the height of Ethiopia's HIV/AIDS epidemic in the early 2000s.",
      location: "Urban and Rural Areas, Ethiopia",
      completedDate: "Early 2010s",
      beneficiaries: "Over 10,000 PLWHA through 450 volunteer service providers",
      budget: "Multiple donor support",
      impact: "Provided dignified care and reduced stigma while establishing foundation for HFCO's comprehensive HIV/AIDS response",
      category: "Healthcare"
    },
    {
      title: "Hospice Project",
      description: "Established specialized hospice services for terminally ill individuals, particularly those affected by HIV/AIDS, providing compassionate end-of-life care and comprehensive family support during the epidemic.",
      location: "Addis Ababa, Ethiopia",
      completedDate: "2010s",
      beneficiaries: "Terminally ill patients and their families",
      budget: "Integrated with HIV/AIDS programs",
      impact: "Provided dignified end-of-life care and comprehensive family support during critical period of HIV/AIDS epidemic",
      category: "Healthcare"
    },
    {
      title: "Lion Kids Kindergarten and Primary School",
      description: "Operated a free formal kindergarten and primary school as a comprehensive social service to support vulnerable children's education, providing quality schooling without cost to families in need.",
      location: "Addis Ababa, Ethiopia",
      completedDate: "2013",
      beneficiaries: "Hundreds of vulnerable children",
      budget: "HFCO social service funding",
      impact: "Provided quality free education ensuring vulnerable children had access to formal schooling and academic preparation",
      category: "Education"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Healthcare": "bg-red-100 text-red-800",
      "Education": "bg-blue-100 text-blue-800",
      "Child Development": "bg-purple-100 text-purple-800",
      "Governance": "bg-indigo-100 text-indigo-800",
      "Economic Development": "bg-green-100 text-green-800",
      "Community Development": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Creating lasting change through carefully planned and executed humanitarian initiatives
            </p>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Ongoing Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.beneficiaries} people</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.startDate} - {project.endDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.budget}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <Badge variant="outline" className="w-fit">
                        {project.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Completed Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {completedProjects.map((project, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Completed: {project.completedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{project.beneficiaries} beneficiaries</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Budget: {project.budget}</span>
                        </div>
                      </div>
                      
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <h4 className="font-medium text-foreground mb-1">Impact Achieved:</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                      
                      <Badge variant="secondary" className="w-fit">
                        Completed
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Our Projects CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-foreground">Support Our Projects</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Your contribution helps us implement more projects and reach more communities in need. 
              Every donation makes a direct impact on people's lives.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg shadow-medium hover:shadow-strong transform hover:-translate-y-1 transition-all"
            >
              Donate to Our Projects
              <Target className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
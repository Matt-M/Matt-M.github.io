<template>
  <main class="container small">
    <article class="white">
      <header>
        <h2>{{ name }}</h2>
        <h3>{{ location }}</h3>
        <span contenteditable>Phone Number - Email Address</span>
      </header>
      <section>
        <h3>Summary</h3>
        <p>{{ summary }}</p>
      </section>
      <Skills v-bind:content="skills"/>
    </article>
    <article class="white">
      <header>
        <h2>Relevant Work Experience</h2>
      </header>
      <Work
        v-for="(item,index) in work"
        v-bind:key="index"
        v-bind:position="item.position"
        v-bind:employer="item.employer"
        v-bind:location="item.location"
        v-bind:date="item.date"
        v-bind:content="item.content"
      ></Work>
    </article>
    <article class="white">
      <header>
        <h2>Education</h2>
      </header>
      <Work
        v-for="(item,index) in education"
        v-bind:key="index"
        v-bind:position="item.position"
        v-bind:location="item.location"
        v-bind:date="item.date"
        v-bind:content="item.content"
      ></Work>
      <section>
        <h3>References Available on Request.</h3>
      </section>
    </article>
  </main>
</template>

<script>
import Skills from "@/components/resume/Skills.vue";
import Work from "@/components/resume/Work.vue";

export default {
  data: function() {
    return {
      name: "Matt Middlebrook",
      location: "Victoria, BC, Canada",
      summary:
        "Focused and adaptable computing science graduate with 8+ years work experience looking for new opportunities in software engineering. I have experience abroad, am honest, cooperative, a fast learner and very quality conscious. I have worked well in team based environments and alone in a remote environment.",
      skills: [
        { name: "Programming Languages", value: "C#, Javascript" },
        {
          name: "Frameworks",
          value: "jQuery, ASP.NET MVC, ASP.NET Razor, SQLite"
        },
        {
          name: "Other Languages",
          value: "XAML, HTML, LINQ, CSS, SCSS, Regular Expressions"
        },
        {
          name: "Development Tools",
          value: "Visual Studio, Visual Studio Code"
        },
        { name: "Other Skills", value: "Git, Team Foundation Server" }
      ],
      work: [
        {
          position: "Software Engineer",
          employer: "STR Speechtech",
          location: "Victoria, Canada",
          date: "September 2014 - Current",
          content: [
            {
              content:
                "Work involved developing a new generation of STR's StarCaster text-to-speech system from scratch using C#, including a Windows service back end and web UI front end."
            },
            {
              content:
                "Designed and developed a new weather module for handling weather in StarCaster, with the goal of reducing the development time required when adding new weather types. Work included:",
              subContent: [
                "A modular framework for decoding, validating and encoding of weather strings using Generics and Regular Expressions.",
                "Expandable web framework for handling the editing of simple and complex weather types using ASP.net MVC, JavaScript and SCSS"
              ]
            },
            {
              content:
                "Met with clients to discuss their StarCaster requirements, design solutions and provide level of effort for those solutions."
            },
            {
              content:
                "Created and maintained emulators for the communication of various external systems to and from StarCaster."
            },
            {
              content:
                "Due to the small size of the company my roles included many IT related tasks in addition to software development including, administration of the company Google e-mail services and management of VMWare ESXi virtual machine servers"
            },
            {
              content:
                "Performed installation and site acceptance testing of a StarCaster VOLMET system in Brazzaville, Republic of the Congo"
            }
          ]
        },
        {
          position: "Web Developer",
          employer: "HospitalityGEM",
          location: "Bath, United Kingdom",
          date: "May 2011 - September 2014",
          content: [
            {
              content:
                "Worked within a small development team and as a result worked mostly alone or with a partner. Had input at all stages of development, from planning and database design, through to the user interface."
            },
            {
              content:
                "Developed three iterations of the HospitalityGEM System, allowing clients to view their dashboard, reports and analysis.",
              subContent: [
                "Silverlight web application with WCF web services, including a service that interfaced with SQL Server Reporting services.",
                "MVC Html 5 capable web application utilising the web services created for the Silverlight application, this project also involved migrating the WCF services to a new database utilising entity framework technology.",
                "Mobile web application using MVC and jQuery Mobile."
              ]
            },
            {
              content:
                "Worked with our Analysis department to design and develop an MVC application to allow administrators to create subscriptions. These would generate and deliver SQL Server Reporting services reports at configurable intervals."
            }
          ]
        },
        {
          position: "Student Software Developer",
          employer: "Avid Development GmbH",
          location: "Munich, Germany",
          date: "July 2009 - July 2010",
          content: [
            {
              content:
                "12 Month work placement at an international software development company, developing Alienbrain, a media asset management system. Worked in a team of software engineers abroad and in office, expanding my communication skills.",
              subContent: [
                "Migrated the code base from VS2000.net to VS2008 and upgraded the project to 64bit",
                "Developed new integrations for Visual Studio, Photoshop, Maya and 3DS Max.",
                "Used Google test to create a unit testing framework.",
                "Took part in daily meetings with the team in English and German"
              ]
            }
          ]
        }
      ],
      education: [
        {
          position: "BSc Hons Computing Science",
          location: "Staffordshire University, UK",
          date: "2007 - 2011",
          content: [
            {
              content: "Relevant Modules Include:",
              subContent: [
                "Web Services",
                "Object Oriented and Event Driven Programming",
                "Building Web Applications"
              ]
            },
            {
              content:
                "For my Final Year Projects i created a WCF web service hosted in the Windows Azure cloud; exposing a PHP web client and C# Windows client. The service was able to store versioned files and allowed for easy searching using metadata tags."
            }
          ]
        },
      ]
    };
  },
  components: {
    Skills,
    Work
  }
};
</script>

<style lang="scss"></style>


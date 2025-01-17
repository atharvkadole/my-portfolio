import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
} from "@mui/material";

const projects = [
  {
    name: "Portfolio Builder",
    description: "A tool for users to create and deploy their portfolio website directly to the server.",
    techStack: ["React.js", "Next.js", "MongoDB", "Material UI", "Tailwind CSS"],
    imageUrl: "/public/assets/Portfolio_Builder.png",
    githubLink: "https://github.com/atharvkadole/portfolio-builder",
    liveDemoLink: "https://atharvk.in/",
  },
  {
    name: "The flavor India",
    description: "TheFlavorIndia.com: A dynamic e-commerce platform showcasing a wide variety of homemade pickles, sweets, and other food products.",
    techStack: ["WooCommerce", "WordPress", "PHP","javaScript","freelance","SEO"],
    imageUrl: "/public/assets/TheFlavorIndia.png",
    githubLink: "https://theflavorindia.com/",
    liveDemoLink: "https://theflavorindia.com/",
  },
  {
    name: "Question-Answer Platform",
    description: "I developed Gemini, a user-friendly Q&A platform designed for seamless knowledge sharing. Users can post questions, share answers, and interact with a vibrant community.",
    techStack: ["React.js", "Html", "CSS", "Gemini", "Material UI", "Tailwind CSS"],
    imageUrl: "/public/assets/gemini.png",
    githubLink: "https://github.com/atharvkadole/ai-question-and-answer",
    liveDemoLink: "https://github.com/atharvkadole/ai-question-and-answer",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gray-900" aria-label="My Projects">
      <Box
        sx={{
          py: 8,
          px: 4,
          margin: "0 auto",
          animation: "fadeIn 0.5s ease",
        }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            marginBottom: 4,
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 4px 30px rgba(6, 22, 61, 0.5)",
                  color: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0px 8px 40px rgba(6, 22, 61, 0.7)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  loading="lazy"
                  image={project.imageUrl}
                  alt={`Screenshot of ${project.name}`}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: "#ffffff" }}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "rgba(255, 255, 255, 0.7)" }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                      mb: 2,
                    }}
                  >
                    {project.techStack.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        sx={{
                          borderColor: "rgba(255, 255, 255, 0.5)",
                          color: "#ffffff",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {project.githubLink && (
                    <Button
                      href={project.githubLink}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        color: "#0072E5",
                        borderColor: "#0072E5",
                        "&:hover": {
                          backgroundColor: "#0072E5",
                          color: "#ffffff",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveDemoLink && (
                    <Button
                      href={project.liveDemoLink}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        color: "#28a745",
                        borderColor: "#28a745",
                        "&:hover": {
                          backgroundColor: "#28a745",
                          color: "#ffffff",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </Card>
            </Box>
          </Grid>
          
          ))}
        </Grid>
      </Box>
    </section>
  );
}

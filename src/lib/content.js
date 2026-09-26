import { parse } from "yaml";

const projectFiles = import.meta.glob(
  "../../content/projects/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

const serviceFiles = import.meta.glob(
  "../../content/services/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

const galleryFiles = import.meta.glob(
  "../../content/gallery/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

function parseMarkdownFile(file) {
  const match = file.match(/^---\s*([\s\S]*?)\s*---/);

  if (!match) {
    return {};
  }

  return parse(match[1]) || {};
}

function loadCollection(files) {
  return Object.entries(files).map(([path, content]) => {
    const data = parseMarkdownFile(content);

    return {
      ...data,
      slug: path.split("/").pop().replace(".md", ""),
    };
  });
}

export const projects = loadCollection(projectFiles);

export const services = loadCollection(serviceFiles);

export const gallery = loadCollection(galleryFiles);
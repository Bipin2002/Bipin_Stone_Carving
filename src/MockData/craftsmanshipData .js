import creationImage from "../assets/creation.jpg";
import restorationImage from "../assets/restoration.jpg";

import replicationImage from "../assets/replication.jpg";

export const craftsmanshipData = [
  {
    id: 1,
    title: "Creation",
    image: creationImage,

    sections: {
      overview: {
        title: "About Creation",
        content: [
          "Our creation process blends traditional craftsmanship with modern techniques to bring unique visions to life.",
          "Each project begins with conceptual sketches and scaled models before precise hand carving.",
          "Artisans dedicate countless hours refining every detail to achieve artistic harmony and excellence."
        ]
      },

      significance: {
        title: "Cultural Significance",
        content:
          "Creation reflects Nepal’s rich artistic heritage through symbolic motifs, spiritual depth, and timeless design."
      },

      history: {
        title: "Historical Roots",
        content:
          "This craft traces back centuries, forming the foundation of temples, monuments, and sacred architecture."
      },

      process: {
        title: "Creation Process",
        steps: [
          "Conceptual design and planning",
          "Material selection",
          "Hand carving and detailing",
          "Finishing and quality inspection"
        ]
      },

      gallery: {
        title: "Creation Gallery",
        images: [
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image6.jpg",
            caption: "Masterpiece carved with traditional techniques"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
            caption: "Close-up of detailed motifs and patterns"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
            caption: "Final installation at the heritage site"
          }
        ]
      }
    }
  },

  {
    id: 2,
    title: "Renovation",
    image: restorationImage,

    sections: {
      overview: {
        title: "About Renovation",
        content: [
          "Renovation revives historical structures while respecting their original identity.",
          "We study original materials, methods, and designs before restoration begins.",
          "Every intervention maintains authenticity and cultural integrity."
        ]
      },

      significance: {
        title: "Cultural Importance",
        content:
          "Renovation preserves Nepal’s monuments, temples, and cultural landmarks for future generations."
      },

      history: {
        title: "Traditional Knowledge",
        content:
          "Restoration skills have been passed down through generations of master artisans."
      },

      process: {
        title: "Renovation Process",
        steps: [
          "Condition assessment",
          "Documentation and planning",
          "Restoration using original techniques",
          "Final structural and aesthetic review"
        ]
      },

      gallery: {
        title: "Renovation Gallery",
        images: [
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image6.jpg",
            caption: "Masterpiece carved with traditional techniques"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
            caption: "Close-up of detailed motifs and patterns"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
            caption: "Final installation at the heritage site"
          }
        ]
      }
    }
  },

  // {
  //   id: 3,
  //   title: "Art Fabrication",
  //   image: "https://www.tailwindtap.com/assets/components/gallery/image6.jpg",

  //   sections: {
  //     overview: {
  //       title: "About Art Fabrication",
  //       content: [
  //         "Art fabrication merges artistic creativity with technical precision.",
  //         "We produce sculptures, installations, and functional art using stone, metal, and mixed media.",
  //         "Each piece balances durability with expressive design."
  //       ]
  //     },

  //     significance: {
  //       title: "Artistic Value",
  //       content:
  //         "Art fabrication bridges traditional craftsmanship with contemporary artistic expression."
  //     },

  //     history: {
  //       title: "Evolution of the Craft",
  //       content:
  //         "While tools have evolved, the foundation of artisanal skill and discipline remains unchanged."
  //     },

  //     process: {
  //       title: "Fabrication Process",
  //       steps: [
  //         "Concept design and modeling",
  //         "Material preparation",
  //         "Precision fabrication",
  //         "Finishing and inspection"
  //       ]
  //     },

  //     gallery: {
  //       title: "Fabrication Gallery",
  //      images: [
  //   {
  //     url: "https://www.tailwindtap.com/assets/components/gallery/image6.jpg",
  //     caption: "Masterpiece carved with traditional techniques"
  //   },
  //   {
  //     url: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
  //     caption: "Close-up of detailed motifs and patterns"
  //   },
  //   {
  //     url: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
  //     caption: "Final installation at the heritage site"
  //   }
  // ]
  //     }
  //   }
  // },

  {
    id: 3,
    title: "Replication",
    image: replicationImage,

    sections: {
      overview: {
        title: "About Replication",
        content: [
          "Replication recreates iconic heritage structures with exact detail and proportion.",
          "Each replica is researched, measured, and crafted with precision.",
          "Traditional methods are combined with modern tools for accuracy and longevity."
        ]
      },

      significance: {
        title: "Heritage Preservation",
        content:
          "Replication allows historical architecture to be preserved, studied, and appreciated worldwide."
      },

      history: {
        title: "Legacy of Replication",
        content:
          "For centuries, replication has been used to document and preserve cultural landmarks."
      },

      process: {
        title: "Replication Process",
        steps: [
          "Research and documentation",
          "Detailed measurement and modeling",
          "Precise carving and construction",
          "Final finishing and installation"
        ]
      },

      gallery: {
        title: "Replication Gallery",
        images: [
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image6.jpg",
            caption: "Masterpiece carved with traditional techniques"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
            caption: "Close-up of detailed motifs and patterns"
          },
          {
            url: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
            caption: "Final installation at the heritage site"
          }
        ]
      }
    }
  }
];

import type { LLMGeneratorConfig } from "@/lib/llm-test-generator"
import { CLI } from "../cli"

export const config: LLMGeneratorConfig = {
  stimuli: {
    systemText:
      "You are a high school biology teacher employed by the collegeboard to create stimuli for questions on the AP Biology exam.",
    descriptions: {
      text: "Provide a hypothetical situation related to biological theories, studies, experiments, or concepts. This should be detailed enough to inform the subsequent questions. The scenario should focus on specific biological mechanisms, processes, or structures.",
      attribution: "The author, organization, or source of the material.",
    },
  },
  mcqs: {
    systemText:
      "You are a high school biology teacher employed by the collegeboard to create multiple choice questions for the AP Biology exam.",
    descriptions: {
      question:
        "Develop a multiple-choice question that tests students' understanding or application of specific biological concepts. The question should be detailed and context-driven, assessing knowledge of biological mechanisms, processes, or structures. Include one correct answer and several plausible distractors that reflect common misconceptions or errors. Subsequent questions should not merely reword previous questions. New concepts should be introduced.",
    },
  },
  frqs: {
    systemText:
      "You are a high school biology teacher employed by the collegeboard to create free response questions for the AP Biology exam.",
    descriptions: {
      question:
        "Develop a free response question that requires students to explain a biological concept in detail, including defining specific terms and illustrating the concept with a relevant example. The response should demonstrate a comprehensive understanding of both the definition and practical application of the concept in a biological context. Ensure the question allows for an in-depth explanation and analysis of biological mechanisms or processes.",
    },
  },
}

export const subjectName = "AP Biology"

export const unitNames = [
  "Unit 1: Chemistry of Life - water properties, macromolecules, enzymes, carbon, hydrogen bonding, pH, carbohydrates, lipids, proteins, nucleic acids, dehydration synthesis, hydrolysis, amino acids, fatty acids, phospholipids, polysaccharides, monosaccharides, disaccharides, peptide bonds, nucleotide, ribose, deoxyribose, active site, substrate, denaturation",
  "Unit 2: Cell Structure and Function - cell membrane, organelles, diffusion, osmosis, active transport, endocytosis, exocytosis, cytoskeleton, cell theory, prokaryotic cells, eukaryotic cells, surface area-to-volume ratio, phospholipid bilayer, fluid mosaic model, integral proteins, peripheral proteins, Golgi apparatus, endoplasmic reticulum, lysosomes, peroxisomes, mitochondria, chloroplasts, vesicles, plasmodesmata",
  "Unit 3: Cellular Energetics - ATP, cellular respiration, glycolysis, Krebs cycle, electron transport chain, photosynthesis, chloroplast, light reactions, Calvin cycle, chemiosmosis, fermentation, mitochondria, NADH, FADH2, oxidative phosphorylation, substrate-level phosphorylation, photophosphorylation, stroma, thylakoid, grana, carbon fixation, RuBP, ATP synthase, cytochrome complex",
  "Unit 4: Cell Communication and Cell Cycle - signal transduction, receptors, ligands, second messengers, apoptosis, cell cycle, mitosis, meiosis, cytokinesis, checkpoints, cyclins, kinases, G1 phase, S phase, G2 phase, M phase, interphase, prophase, metaphase, anaphase, telophase, spindle fibers, centromere, chromatid, chromatin, crossing over, synapsis",
  "Unit 5: Heredity - Mendelian genetics, Punnett squares, pedigree analysis, chromosomal inheritance, genetic linkage, mutations, independent assortment, segregation, polygenic traits, epistasis, sex-linked traits, allele, dominant, recessive, homozygous, heterozygous, genotype, phenotype, test cross, dihybrid cross, multiple alleles, incomplete dominance, codominance",
  "Unit 6: Gene Expression and Regulation - DNA replication, transcription, translation, RNA processing, gene regulation, operons, epigenetics, mutations, biotechnology, CRISPR, gene expression, protein synthesis, RNA polymerase, promoter, enhancer, repressor, exon, intron, spliceosome, ribosome, tRNA, mRNA, codon, anticodon, start codon, stop codon, poly-A tail, 5' cap",
  "Unit 7: Natural Selection - evolution, natural selection, genetic drift, gene flow, speciation, adaptation, Hardy-Weinberg equilibrium, phylogenetics, fossils, biogeography, convergent evolution, divergent evolution, homologous structures, analogous structures, vestigial structures, adaptive radiation, punctuated equilibrium, gradualism, allele frequency, genetic bottleneck, founder effect",
  "Unit 8: Ecology - ecosystems, food webs, energy flow, biogeochemical cycles, population ecology, community ecology, ecological succession, niche, symbiosis, carrying capacity, biodiversity, conservation biology, trophic levels, producers, consumers, decomposers, primary succession, secondary succession, keystone species, invasive species, habitat fragmentation, ecological footprint, eutrophication, nitrogen cycle, carbon cycle, phosphorus cycle",
]

export const cli = await CLI.create(subjectName, unitNames, config)

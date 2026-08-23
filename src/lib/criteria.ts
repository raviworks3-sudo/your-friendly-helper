export const PDF_URL =
  "https://cdn.jsdelivr.net/gh/hildecorp/redbellydaotask25@main/website/TASK-25-Proposal-Evaluation-Rubric.pdf";

export const DOCS_URL =
  "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/hildecorp/redbellydaotask25/main/website/TASK-25-Proposal-Evaluation-Rubric.docx&embedded=true";

export const SNAPSHOT_URL =
  "https://snapshot.box/#/s:rbnt.eth/proposal/0xf2a05384e37a710c1600db1abbac9b4dc66444a56a1ed49df7f0e3dbfd7570e7";

export const CONSTITUTION_URL =
  "https://firebasestorage.googleapis.com/v0/b/redbelly-community-dao.firebasestorage.app/o/resources%2F1762476390856-Redbelly%20Community%20DAO%20Constitution%20v1.2%20-%20Ratified.pdf?alt=media&token=c89ccef9-cc7c-4a37-9b43-a3fac9e49ddc";

export const CODE_OF_CONDUCT_URL =
  "https://firebasestorage.googleapis.com/v0/b/redbelly-community-dao.firebasestorage.app/o/resources%2F1762476540292-Redbelly%20Community%20DAO%20Code%20of%20Conduct%20-%20Ratified.pdf?alt=media&token=84ca2c33-a502-4991-9720-4e6154847416";

export const GITHUB_URL = "https://github.com/hildecorp/redbellydaotask25";

export const DEVTO_URL =
  "https://dev.to/hildecorp/from-ratified-checklist-to-working-tool-redbelly-daos-proposal-pre-screening-framework-3im4";

export const DISCREPANCIES: { label: string; body: string }[] = [
  {
    label: "Three working groups vs. the retired pod structure",
    body: "Criterion 3 checks alignment with one of three working groups, Community, Marketing, Developers-Builders. Constitution v1.2 named five pods for this. The DAO Guild Structure Consolidation vote, passed 20 September 2025, merged two of those five into the other three. Constitution v1.3 then removed the pod structure from the Constitution entirely. The three groups the checklist names are still the ones in practice, but nothing in the current Constitution defines or anchors them. A flag on Criterion 3 is expected for any submission today, not a sign of a broken tool.",
  },

  {
    label: "Criterion 11 has no ratified flag condition",
    body: "Every other criterion in the ratified checklist pairs a pass condition with an explicit flag rule. Community Involvement does not. Any flag raised here is labelled informational only and never marks a proposal as failing pre-screening on its own.",
  },
];

export type Criterion = {
  number: string;
  name: string;
  anchor: string;
  flag: string;
  link?: string;
};

export const CRITERIA: Criterion[] = [
  {
    number: "01",
    name: "Budget Alignment & Limits",
    anchor: "Section 5.7",
    flag: "Flags if the USDT/RBNT split is missing, if USDT requested is over the 100,000 annual cap or RBNT requested is over the 10,000,000 pool set in Section 5.7, or if the justification field is empty.",
    link: `${CONSTITUTION_URL}#page=10`,
  },
  {
    number: "02",
    name: "Payment & Payout Structure",
    anchor: "Section 6",
    flag: "Flags if Upfront is selected with no justification, or the milestone list is empty.",
    link: `${CONSTITUTION_URL}#page=12`,
  },
  {
    number: "03",
    name: "Strategic Fit",
    anchor:
      "No Constitution anchor. Constitution v1.3 retired the pod structure entirely. See Known Discrepancies.",
    flag: "Flags if the alignment explanation is empty, or the pod selected is not one of the three named in the ratified text: Community, Marketing, Developers-Builders.",
  },

  {
    number: "04",
    name: "Feasibility & Timeline",
    anchor: "No Constitution anchor",
    flag: "Flags if the timeline is empty or the resourcing note is empty.",
  },
  {
    number: "05",
    name: "Oversight & Accountability",
    anchor: "Section 6.1",
    flag: "Flags if the reviewer field or the monthly update plan is empty.",
    link: `${CONSTITUTION_URL}#page=10`,
  },
  {
    number: "06",
    name: "Impact & Measurement",
    anchor: "No Constitution anchor",
    flag: "Flags if KPIs are empty, or only short-term value is described with nothing under long-term or community value.",
  },
  {
    number: "07",
    name: "Risk & Mitigation",
    anchor: "No Constitution anchor",
    flag: "Flags if the risk list is empty or any risk has no paired mitigation.",
  },
  {
    number: "08",
    name: "Co-Funding & Leverage",
    anchor: "No Constitution anchor",
    flag: "Flags, informationally and non-blocking, if left empty.",
  },
  {
    number: "09",
    name: "Contribution Equity",
    anchor: "Section 5",
    flag: "Flags if one contributor's share of payout is disproportionate, or a listed contributor already holds another paid DAO role with no justification given.",
    link: `${CONSTITUTION_URL}#page=9`,
  },
  {
    number: "10",
    name: "Compliance & Ethical Standards",
    anchor: "Code of Conduct v1.0",
    flag: "Flags if the disclosure field is empty or the Code of Conduct acknowledgement is unchecked.",
    link: CODE_OF_CONDUCT_URL,
  },
  {
    number: "11",
    name: "Community Involvement",
    anchor: "Section 8",
    flag: "Flags only if the evidence field is completely empty. The ratified checklist gives this criterion no flag condition at all, so this flag is always informational, never a failure.",
    link: `${CONSTITUTION_URL}#page=12`,
  },
];

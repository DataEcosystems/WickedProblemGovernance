# @wpg/analysis

Utilities for analyzing Wicked Problem Governance models such as governance episodes and projects.

## Building/Installation

See the [root README](https://github.com/DataEcosystems/WickedProblemGovernance).

## Usage examples

See the [unit tests](./__tests__/) for further examples.

### Calculate a `GovernanceEpisode`'s coupling load

```
GovernanceEpisode.couplingLoad({
    domainHeterogeneity: GovernanceEpisode.domainHeterogeneity({
      D: {
        "https://purl.dataecosystems.org/wpg/cbox#EducationDomain": 2,
        "https://purl.dataecosystems.org/wpg/cbox#HealthDomain": 2,
        "https://purl.dataecosystems.org/wpg/cbox#HumanServicesDomain": 3,
      },
    })!,
    layerHeterogeneity: GovernanceEpisode.layerHeterogeneity({
      L: {
        "https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer": 6,
        "https://purl.dataecosystems.org/wpg/cbox#RegionalInstitutionalLayer": 1,
      },
    })!,
    partnerCount: 7,
});
```

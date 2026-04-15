# Untitled string in Governance Event Schema

```txt
undefined#/properties/timestamp/anyOf/1
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [GovernanceEvent.schema.json\*](../schema.json/GovernanceEvent.schema.json "open original schema") |

## 1 Type

`string`

## 1 Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
```

[try pattern](https://regexr.com/?expression=%5E\(%3F%3A\(%3F%3A%5Cd%5Cd%5B2468%5D%5B048%5D%7C%5Cd%5Cd%5B13579%5D%5B26%5D%7C%5Cd%5Cd0%5B48%5D%7C%5B02468%5D%5B048%5D00%7C%5B13579%5D%5B26%5D00\)-02-29%7C%5Cd%7B4%7D-\(%3F%3A\(%3F%3A0%5B13578%5D%7C1%5B02%5D\)-\(%3F%3A0%5B1-9%5D%7C%5B12%5D%5Cd%7C3%5B01%5D\)%7C\(%3F%3A0%5B469%5D%7C11\)-\(%3F%3A0%5B1-9%5D%7C%5B12%5D%5Cd%7C30\)%7C\(%3F%3A02\)-\(%3F%3A0%5B1-9%5D%7C1%5Cd%7C2%5B0-8%5D\)\)\)T\(%3F%3A\(%3F%3A%5B01%5D%5Cd%7C2%5B0-3%5D\)%3A%5B0-5%5D%5Cd\(%3F%3A%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\)%3F\(%3F%3AZ\)\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Formulas of form field

If the field formula is added, the system can automatically calculate the value of the field when applicants fill in the forms.

#### Common formulas

- Value of a field: {amount}

- Functions based on field values
  - Add：{field A}+{field B}
  - Subtract：{field A}-{field B}
  - Multiply：{field A}*{ field B }
  - Divide：{field A}/{ field B }

- Functions based on numeric field in tables
  - SUM: sum ({expense})
  - AVERAGE：average({expense})
  - COUNT：count({item})
  - MAXIUM：max({expense})
  - MINIUM：min({expense})

- System variables based on applicants
  - Name：{applicant.name}
  - Organization（full path）：{applicant.organization.fullname}
  - Organization（name of the lowest organization）：{applicant.organization.name}
  - Role name: {applicant.roles}
  - Mobile:{applicant.mobile}
  - Work phone:{applicant.work_phone}
  - Position: {applicant.position}

- System variables based on name field in forms
  - Organization（full path)：{name}.organization.fullname
  - Organization（name of the lowest organization）：{name}.organization.name
  - Roles:{name}.roles
  - Name:{name}.name
  - Mobile:{name}.mobile
  - Work phone:{name}.work_phone
  - Position:{name}.position

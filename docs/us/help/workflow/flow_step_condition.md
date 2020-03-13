## Condition node

System can select next step automatically according to the condition in condition node.

For instance, in a “Reimbursement” request, system can select next step according to “Total Amount”. If total amount is more than 10000, requests will be submitted to general manager at first and then submitted to finance director after approval. If it is no more than 10000, requests will be directly submitted to finance director.

Conditional formula：{ Total Amount }>10000 and { Total Amount }<=10000

#### notice
- There cannot be overlapping conditions. For instance, “{Total Amount}>=10000” and “{Total Amount}<=10000” are wrong formulas. Because “{Total Amount}=10000” is overlapping condition.
- The formulas should cover all conditions. For instance, “{Total Amount}>10000” and “{Total Amount}<10000” are wrong formulas. Because “{Total Amount}=10000” is omitted.

If there are wrong formulas, system cannot select the next step sometimes.

### How to add a condition node?
Please follow the next step to add a node.
- Enter the flow design interface and click “Draw” button.
- Select “Condition” icon and Drag it to the left side.
- Modify step name by clicking “Properties”. For instance, rename it with “Whether Total Amount is more than 10000”.
- Hover with your mouse over the “?” icon and then click “+” to add two lines and connect them with two nodes.
- Click one line and then click on “properties”
- Input the formula “{Total Amount}>10000” in “execute only when” box 
- Then input the formula “{Total Amount}<=10000” to modify properties of the other line.

#### Please refer to “Basic rules of writing conditions” for more details.
- Basic rules of writing conditions：
  - Characters and symbols：half-width
  - Referenced fields：{field name}
  - Nested conditions：()
  - Formulas and functions are allowed
- Common items in conditions
  - Numeric constants：number
  - Character constants：“Beijing”
  - Field variables：{field name}
- System variables based on applicants
  - Name：{applicant.name}
  - Organization（full path):{applicant.organization.fullname}
  - Organization（name of the lowest organization): {applicant.organization.name}
  - Role name: {applicant.roles}
- System variables based on name field in forms
  - Organization（full path):{name}.organization.fullname
  - Organization（name of the lowest organization): {name}.organization.name
  - Roles: {name}.roles
  - Name: {name}.name
- Functions based on field values
  - Add：{field A}+{field B}
  - Subtract：{field A}-{field B}
  - Multiply：{field A}*{ field B }
  - Divide：  {field A}/{ field B }
- Functions based on numeric field in tables
  - SUM: sum ({expense})
  - AVERAGE：average({expense})
  - COUNT：count({item})
  - MAXIUM：max({expense})
  - MINIMM：min({expense})
- Conditions of numeric type
  - Equal：=
  - Greater than：>
  - Less than: <
  - Greater than or equal to: >=
  - Less than or equal to: <=
  -Not equal to: ! = or < >
- Conditions of character type
  - Field A is Beijing: {Field A}= “Beijing”
  - Field B is not Beijing: {Field B}!= “Beijing”
  - Applicant is general manager: _.contains({applicant.roles},'general manager')

#### notice：
A user can act as several roles, so we use “contain” this condition.

- Combination of conditions
  - OR：|| 
    - E.g.{Total Amount}<1000 || {Field A}= “Beijing”
  - AND: &&
    - E.g. {Total Amount}<1000 && {Field A}= “Beijing”
  - INVERT: !
    -  E.g. !({Total Amount}<1000))


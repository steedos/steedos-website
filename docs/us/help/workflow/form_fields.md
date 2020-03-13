## Form fields

#### Field types

Steedos Workflow provide users with several field types for better form design。Input field，selection field and others are included in Steedos Workflow.

![](static/assets/us/workflow/15.png)

- Input field
  - Text: It is the most commonly used field type and the format in it is limitless.
  - Number: Users must input numbers in it.
  - Date:  Users can select a date and it will displays in “yyyy-mm-dd” format.
  - Date-Time: Hour and minute will be displayed except for year, month and date.
  - YesNo Box：Users can select yes or no.
 
 In “Input field”, you must input information through keyboard or mouse.
  
- Selection field
  - Drop-down: User can only select one from preset options.
  - Select User: All space users will be displayed in options whether their accounts are valid or not.
  - Select Dept.: All organization names in full path format will be displayed in options.
  - Checkbox: User can only select one from preset options.
  - Radio: User can select one or more from preset options.

- Others
  - Section: admins can classify fields into sections according to their contents.
  - Table: admins can inert a table for applicants to input kinds of detail information. 

#### Properties

![](static/assets/us/workflow/16.png)

- **Field Name:** It is stored in database and cannot repeat in the same form. Field Name, instead of Display Name, will be used in formulas and conditions.

- **Display Name:** It will display in the form and can repeat in the same form. Display Name is the same as Field Name by default, and you can modify it.

- **Required:** When “Required” is selected, the field will be marked with “*”. It means that the information is significant and required. Applicants cannot submit requests without having finished all required fields.

- **Wide:** When “Wide” is selected, the width of the field will be two columns. Or, it will be one column.

- **Default Value:** It can be preset if necessary. 

- **List Values:** Please input all options.

- **Select type:** “Multiple Choice” and “Single Choice” .

#### Notice:
Field Name is unique in the same form, but Display Name can repeat.


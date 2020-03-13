---
title: Approver settings
---

In the flow designer，admins have several options to asign users for a node.

![](/assets/us/workflow/19.png)

- Pick users at runtime
  - The default value of next step users is empty after the settings. User in the node has to select next step users.

- Particular users
  - Admins can assign particular users to approve requests in the node. If it is a countersignature node, users in previous step must select more than one user to approve the request.

- Particular roles
  - In a flow, admins can assign one or more users to play one or more roles. Then admins can select a role to approve requests in the node. If it is a countersignature node, users in previous step must select more than one user who play the role to approve the request.

  Please refer to [Flow role and position settings](admin_roles.md) for more details.

- Initiator’s Manager
  - Admins can assign initiator’s manager to approve requests in the node. Users in previous step must select initiator’s manager to approve the request.

  Please refer to [User Settings](admin_space_users.md) for more details.

- Initiator 
  - In the node, users in previous step must select initiator to approve the request.

- Particular departments
  - Admins can assign all users in particular departments to approve requests in the node. Users in previous step can only select one if the node is not a countersignature node. But users in previous step must select more than one user in particular departments if it is a countersignature node.

  Please refer to [Organization Settings](admin_organizations.md) for more details.


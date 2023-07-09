type Inputs = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: Services;
  budget: BudgetValue;
};

type Action = {
  type: ActionTypes;
  name: keyof Inputs;
  value: string | Services | BudgetValue;
};

enum Errors {
  NameRequired = "Name is required.",
  EmailRequired = "Email is required.",
  EmailInvalid = "Email is invalid.",
  PhoneRequired = "Phone is required",
  PhoneInvalid = "Phone is invalid.",
  CompanyRequired = "Company is required.",
}

enum Services {
  Development = "Development",
  WebDesign = "Web Design",
  Marketing = "Marketing",
  Other = "Other",
}

enum Budgets {
  Low = "$5.000 - $10.000",
  Mid = "$10.000 - $20.000",
  High = "$20.000 - $50.000",
  Premium = "$50.000 +",
}

enum BudgetValue {
  Low = "5000-10000",
  Mid = "10000-20000",
  High = "20000-50000",
  Premium = "50000",
}

enum ActionTypes {
  SetValue = "setValue",
}

export { Errors, Services, Budgets, BudgetValue, ActionTypes, Inputs, Action };

import Ileads from "../../app/interface/leads";

const jsonData = `[
	{
		"_id": "63c5aafc2eb59b26da106b6a",
		"name": "Lead 1",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b6b",
		"name": "Lead 2",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b6c",
		"name": "Lead 3",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b6d",
		"name": "Lead 4",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b6e",
		"name": "Lead 5",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b6f",
		"name": "Lead 6",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b70",
		"name": "Lead 7",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b71",
		"name": "Lead 8",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b72",
		"name": "Lead 9",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b73",
		"name": "Lead 10",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b74",
		"name": "Lead 11",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b75",
		"name": "Lead 12",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b76",
		"name": "Lead 13",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b77",
		"name": "Lead 14",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b78",
		"name": "Lead 15",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b79",
		"name": "Lead 16",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7a",
		"name": "Lead 17",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7b",
		"name": "Lead 18",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7c",
		"name": "Lead 19",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7d",
		"name": "Lead 20",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7e",
		"name": "Lead 21",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b7f",
		"name": "Lead 22",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b80",
		"name": "Lead 23",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b81",
		"name": "Lead 24",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b82",
		"name": "Lead 25",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b83",
		"name": "Lead 26",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b84",
		"name": "Lead 27",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b85",
		"name": "Lead 28",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b86",
		"name": "Lead 29",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b87",
		"name": "Lead 30",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b88",
		"name": "Lead 31",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b89",
		"name": "Lead 32",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8a",
		"name": "Lead 33",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8b",
		"name": "Lead 34",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8c",
		"name": "Lead 35",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8d",
		"name": "Lead 36",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8e",
		"name": "Lead 37",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b8f",
		"name": "Lead 38",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b90",
		"name": "Lead 39",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b91",
		"name": "Lead 40",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b92",
		"name": "Lead 41",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b93",
		"name": "Lead 42",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b94",
		"name": "Lead 43",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b95",
		"name": "Lead 44",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b96",
		"name": "Lead 45",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b97",
		"name": "Lead 46",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b98",
		"name": "Lead 47",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b99",
		"name": "Lead 48",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b9a",
		"name": "Lead 49",
		"email": "lead1@nt.digital"
	},
	{
		"_id": "63c5aafc2eb59b26da106b9b",
		"name": "Lead 50",
		"email": "lead1@nt.digital"
	}
]`;

const leadsArray: Ileads[] = JSON.parse(jsonData).map((item: Ileads) => {
    return {
        _id: item._id,
        name: item.name,
        email: item.email,
    } ;
});

export default leadsArray
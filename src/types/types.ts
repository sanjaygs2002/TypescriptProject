export interface Policy{
    id:number,
    name:string,
    type: "Health | Life | Motor",
    premium : number,
    term : number,
    description: string
}

type Role = "Customer" | "Agent";  

export interface User{
    id : number,
    name: string,
    email: string,
    password: string,
    role: Role,
    myPolicies: Policy[]      // Here one logics
}

export interface Claim{
    id: number,
    policyId: number,
    userId: number,
    reason:string,
    claimAmount:string,
    status: "Pending" | "Approved" | "Rejected"
}

export interface AuthContextType{
    user: User | null,
    login: (email:string,password: string) => boolean,
    logout: ()=> void,
    buyPolicy : (policy: Policy)=>void
}


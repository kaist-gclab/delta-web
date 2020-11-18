import { injectable } from 'inversify';

@injectable()
export default class TokenService {
    getToken() {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSW5mbyI6IntcImFjY291bnRcIjp7XCJpZFwiOjEsXCJ1c2VybmFtZVwiOlwiRGVmYXVsdEFkbWluVXNlclwifSxcInJvbGVcIjpcIkFkbWluXCJ9IiwianRpIjoiNjk5YTkwMjU5Y2NhNmM5NGQ2NDRlZjI3NzJlZTI1MTRlNjNhOWJiNzdhZjQ0MmQ5MzVkY2JkZTc2YzI5NDNhYSIsImlzcyI6IkRlbHRhLkFwcFNlcnZlciIsImF1ZCI6IkRlbHRhLkFwcFNlcnZlciJ9.6FjahYC_T1jCE7S8U_FHL-LxoHzptRvDgCtxXM-4UUg';
    }
}

import z from 'zod';

const depositSchema = z.object({
    amount: z
        .string({required_error: 'Tutar bilgisi gerekli!'})
        .min(2)
        .max(10, {message: 'Tutar bilgisi en fazla 10 hane olabilir.'})
        .trim(),
    /*
    expiry: z
        .string({required_error: 'Vade süresi bilgisi gerekli!'})
        .min(1)
        .trim(),

    ratio: z
        .string({required_error: 'Oran bilgisi gerekli!'})
        .min(1)
        .trim(),

    taxRate: z
        .string({required_error: 'Stopaj bilgisi gerekli!'})
        .trim(),
    */
});

export function load() {
    console.log("page load ...");
}

export const actions = {
    default: async ({request}) => {
        const data = Object.fromEntries(await request.formData());
        
        try {
            const result = depositSchema.parse(data);
            console.log('success!');
            console.log(result);
        } catch (err) {
            const {fieldErrors: errors} = err.flatten();
            const {amount} = data;
            return {
                amount,
                errors
            };
        }
    }
}
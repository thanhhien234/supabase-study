import supabase from "../supabaseClient";

function useFileDrop() {

    const handleFileDrop = async (file) => {
        if (!file || file.length === 0) {
            return;
        }
        const fileExt = file[0].name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { data, error } = await supabase.storage
            .from('files')
            .upload(fileName, file[0]);

        if (error) {
            throw new Error('Error uploading: ' + error.message);
        }
        const userId = supabase.auth.user()?.id;
        console.log('User ID:', userId);
        const { error: insertError } = await supabase
            .from('files')
            .insert([
                {   
                    file_name: fileName,
                    file_size: file[0].size,
                    created_at: new Date().toISOString(),
                    created_by: supabase.auth.user()?.id,
                },
            ]);

        if (insertError) {
            throw new Error('Error insert ' + insertError.message);
        }
    };
    
    return { handleFileDrop};
}

export default useFileDrop;
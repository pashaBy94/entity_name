const baseUrl = 'http://127.0.0.1:3001';

export const fetchEntities = async () => {
    try {
        const response = await fetch(`${baseUrl}/entities`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch entities:', error);
        throw error;
    }
};
export const getEntitie = async entityId => {
    try {
        const response = await fetch(`${baseUrl}/entities/${entityId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch entities:', error);
        throw error;
    }
};

export const createEntity = async entity => {
    try {
        const response = await fetch(`${baseUrl}/entities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entity),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to create entity:', error);
        throw error;
    }
};

export const editEntity = async (entityId, updatedEntity) => {
    try {
        const response = await fetch(`${baseUrl}/entities/${entityId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEntity),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to edit entity:', error);
        throw error;
    }
};

export const removeEntity = async entityId => {
    try {
        const response = await fetch(`${baseUrl}/entities/${entityId}`, {
            method: 'DELETE',
        });
        if (response.status === 204) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Failed to remove entity:', error);
        throw error;
    }
};
